<script setup lang="js">
import * as XLSX from 'xlsx';
import { useRoute } from 'vue-router';
const props = defineProps({
  label: {
    type: String,
    default: 'Export Excel',
  },
  route: {
    type: String,
    default: null,
  },
  customClasses: String,
  type: {
    type: String,
    default: 'button',
  },
  icon: {
    type: String,
    default: '',
  },
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  fileName: {
    type: String,
    default: () => {
      const route = useRoute(); // Access the current route
      const routeName = route.name  // Get route name or fallback
      return `${routeName}.xlsx`; // Use the route name as the file name
    },
  },
});

function validateInput() {
  if (!Array.isArray(props.headers) || !Array.isArray(props.data)) {
    console.error('Invalid headers or data format. Both should be arrays.');
    return false;
  }

  if (props.data.length === 0) {
    console.warn('No data available to export.');
    alert('No data available to export.');
    return false;
  }

  if (props.headers.some(h => typeof h !== 'string')) {
    console.error('All headers must be strings.');
    alert('Invalid headers. Please check your configuration.');
    return false;
  }

  const missingKeys = props.headers.filter(header => {
    return !props.data.every(row => row.hasOwnProperty(header.toLowerCase().replace(/\s+/g, '')));
  });

  if (missingKeys.length > 0) {
    console.error('Some rows are missing keys:', missingKeys);
    alert('Some rows are missing keys. Please check your data.');
    return false;
  }

  return true;
}


function exportToExcel() {
  if (!validateInput()) return;

  // Mapping between original headers and user-friendly names
  const headerMapping = {
    namereseller: 'Name',
    emailreseller: 'Email',
    phonereseller: 'Phone',
    currencyreseller: 'Currency',
    overdraftlimitreseller: 'Overdraft Limit',
    balancereseller: 'Balance',
    lastrechargereseller: 'Last Recharge',
    amountreseller: 'Amount',
    smstype: 'SMS Type',
    encoding: 'Encoding',
    total: 'Total',
    remaining: 'Remaining',
    senderid: 'Sender ID',
    status: 'Status',
    scheduled: 'Scheduled',
    begin: 'Begin',
    completion: 'Completion',
    smsidreseller: 'SMS ID',
    senderidreseller: 'Sender ID',
    customer: 'Customer',
    dlrstatusreseller: 'DLR Status',
    messagereseller: 'Message',
    smsid: 'SMS ID',
    senderid: 'Sender ID',
    dlrstatus: 'DLR Status',
    message: 'Message',
    number: 'Number',
    type: 'Type',
    length: 'Length',
    rate: 'Rate',
    cost: 'Cost',
    sentdate: 'Sent Date',
    dlrdate: 'DLR Date',
    parts: 'Parts',
    country: 'Country',
    operator: 'Operator',
    jobid: 'Job ID',
    errorcode: 'Error Code',
    errordescription: 'Error Description',
    allusers_customer: "Customer",
    allusers_number: "Number",
    allusers_dlrstatus: "DLR Status",
    allusers_errordescription: "Error Description",
    allusers_account: "Account",
    allusers_route: "Route",
    allusers_clientrate: "Client Rate",
    allusers_senderid: "Sender ID",
    allusers_country: "Country",
    allusers_operator: "Operator",
    allusers_clientcost: "Cost",
    allusers_sentdate: "Sent Date",
    allusers_dlrdate: "DLR Date",
    allusers_source: "Source",
    allusers_smstype: "SMS Type",
    allusers_parts: "Parts",
    allusers_type: "Type",
    allusers_length: "Length",
    allusers_reseller: "Reseller",
    allusers_reseller_rate: "Reseller Rate",
    allusers_reseller_cost: "Reseller Cost",
    allusers_termination_rate: "Termination Rate",
    allusers_termination_cost: "Termination Cost",
    allusers_smsid: "SMS ID",
    allusers_message: "Message",
    admindisapproved_customer: "Customer",
    admindisapproved_number: "Number",
    admindisapproved_dlrstatus: "DLR Status",
    admindisapproved_errordescription: "Error Description",
    admindisapproved_account: "Account",
    admindisapproved_route: "Route",
    admindisapproved_clientrate: "Client Rate",
    admindisapproved_senderid: "Sender ID",
    admindisapproved_country: "Country",
    admindisapproved_operator: "Operator",
    admindisapproved_clientcost: "Client Cost",
    admindisapproved_sentdate: "Sent Date",
    admindisapproved_dlrdate: "DLR Date",
    admindisapproved_source: "Source",
    admindisapproved_smstype: "SMS Type",
    admindisapproved_parts: "Parts",
    admindisapproved_type: "Type",
    admindisapproved_length: "Length",
    admindisapproved_reseller: "Reseller",
    admindisapproved_reseller_rate: "Reseller Rate",
    admindisapproved_reseller_cost: "Reseller Cost",
    admindisapproved_termination_rate: "Termination Rate",
    admindisapproved_termination_cost: "Termination Cost",
    admindisapproved_smsid: "SMS ID",
    admindisapproved_message: "Message",
    adminreseller_message: "Customer",
    adminreseller_number: "Number",
    adminreseller_dlrstatus: "DLR Status",
    adminreseller_errordescription: "Error Description",
    adminreseller_account: "Account",
    adminreseller_route: "Route",
    adminreseller_clientrate: "Client Rate",
    adminreseller_senderid: "Sender ID",
    adminreseller_country: "Country",
    adminreseller_operator: "Operator",
    adminreseller_clientcost: "Client Cost",
    adminreseller_sentdate: "Sent Date",
    adminreseller_dlrdate: "DLR Date",
    adminreseller_source: "Source",
    adminreseller_smstype: "SMS Type",
    adminreseller_parts: "Parts",
    adminreseller_type: "Type",
    adminreseller_length: "Length",
    adminreseller_reseller: "Reseller",
    adminreseller_reseller_rate: "Reseller Rate",
    adminreseller_reseller_cost: "Reseller Cost",
    adminreseller_termination_rate: "Termination Rate",
    adminreseller_termination_cost: "Termination Cost",
    adminreseller_smsid: "SMS ID",
    adminreseller_message: "Message",
  };

  const mappedHeaders = props.headers.map(header => headerMapping[header] || header);


  const mappedData = props.data.map(item => {
    return props.headers.map(header => item[header] || '');
  });

  const sheetData = [mappedHeaders, ...mappedData];
  const ws = XLSX.utils.aoa_to_sheet(sheetData);

  const columnWidths = mappedHeaders.map(header => ({
    wch: Math.max(
      header.length,
      ...sheetData.map(row => (row[mappedHeaders.indexOf(header)] || '').length)
    ),
  }));
  ws['!cols'] = columnWidths;

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Exported');

  try {
    XLSX.writeFile(wb, props.fileName);
    console.log('File exported successfully:', props.fileName);
  } catch (error) {
    console.error('Error exporting file:', error);
    alert('An error occurred while exporting the file.');
  }
}


function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
  if (!validateInput()) return;
  exportToExcel();
}
</script>

<template>
  <component
    :is="route ? 'router-link' : 'button'"
    :to="route"
    :type="route ? null : type"
    class="inline-flex items-center justify-center gap-2.5 py-4 px-10 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
    :class="customClasses"
    :aria-label="label"
    role="button"
    @click="handleClick"
  >
    <span v-if="icon" :class="icon"></span>

    <slot></slot>
  </component>
</template>

