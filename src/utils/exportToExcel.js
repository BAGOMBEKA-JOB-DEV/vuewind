import * as XLSX from 'xlsx';

/**
 * Export data to an Excel file.
 * @param {Array} data 
 * @param {Array} headers
 * @param {string} fileName
 */
export function exportToExcel(data, headers, fileName) {
  console.log("Export triggered:", { data, headers, fileName });
  const ws = XLSX.utils.json_to_sheet(data, {
    header: headers,
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  XLSX.writeFile(wb, `${fileName}.xlsx`);
}
