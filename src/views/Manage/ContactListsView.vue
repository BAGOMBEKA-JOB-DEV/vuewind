<script setup lang="js">
import { ref } from "vue";
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue';

// store the last copied section key ("default", "rounded", "hover")
const copied = ref(null);

const copyCode = async (code, key) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // Modern API
      await navigator.clipboard.writeText(code);
    } else {
      // Fallback for insecure contexts
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    copied.value = key; // mark which section was copied
    setTimeout(() => (copied.value = null), 2000); // reset after 2s
  } catch (err) {
    console.error("Copy failed:", err);
  }
};
</script>

<template>
  <DefaultLayout>
    <p class="text-secondary-400">
      This is the dashboard view where the samples of all components will be displayed.
    </p>

    <!-- Default Buttons -->
    <p class="mb-3">Sample Buttons</p>
    <div class="space-x-4 mb-4">
      <ButtonDefault class="bg-blue-500 text-white h-10">Primary</ButtonDefault>
      <ButtonDefault class="bg-gray-500 text-white h-10">Secondary</ButtonDefault>
      <ButtonDefault class="bg-green-500 text-white h-10">Success</ButtonDefault>
      <ButtonDefault class="bg-warning text-white h-10">Warning</ButtonDefault>
      <ButtonDefault class="bg-danger text-white h-10">Danger</ButtonDefault>
      <ButtonDefault class="bg-white border border-black text-black h-10">Bordered</ButtonDefault>
    </div>
    <div
      class="relative bg-gray-100 p-3 dark:text-white dark:bg-black border dark:border-white rounded-md text-sm font-mono">
      <pre>&lt;ButtonDefault class="bg-blue-500 text-white h-10"&gt;Primary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-gray-500 text-white h-10"&gt;Secondary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-green-500 text-white h-10"&gt;Success&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-warning text-white h-10"&gt;Warning&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-danger text-white h-10"&gt;Danger&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-white border border-black text-black h-10"&gt;Bordered&lt;/ButtonDefault&gt;</pre>
      <button @click="copyCode(`<ButtonDefault class='bg-blue-500 text-white h-10'>Primary</ButtonDefault>
<ButtonDefault class='bg-gray-500 text-white h-10'>Secondary</ButtonDefault>
<ButtonDefault class='bg-green-500 text-white h-10'>Success</ButtonDefault>
<ButtonDefault class='bg-warning text-white h-10'>Warning</ButtonDefault>
<ButtonDefault class='bg-danger text-white h-10'>Danger</ButtonDefault>
<ButtonDefault class='bg-white border border-black text-black h-10'>Bordered</ButtonDefault>`, 'default')"
        class="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded">
        {{ copied === 'default' ? 'Copied!' : 'Copy' }}
      </button>
    </div>

    <!-- Rounded Buttons -->
    <p class="mb-3 mt-6">Rounded Buttons</p>
    <div class="space-x-4 mb-4">
      <ButtonDefault class="bg-blue-500 text-white rounded-lg h-10">Primary</ButtonDefault>
      <ButtonDefault class="bg-gray-500 text-white rounded-lg h-10">Secondary</ButtonDefault>
      <ButtonDefault class="bg-green-500 text-white rounded-lg h-10">Success</ButtonDefault>
      <ButtonDefault class="bg-warning text-white rounded-lg h-10">Warning</ButtonDefault>
      <ButtonDefault class="bg-danger text-white rounded-lg h-10">Danger</ButtonDefault>
      <ButtonDefault class="bg-white border border-black rounded-lg text-black h-10">Bordered</ButtonDefault>
    </div>
    <div
      class="relative bg-gray-100 p-3 rounded-md text-sm font-mono dark:text-white dark:bg-black border dark:border-white">
      <pre>&lt;ButtonDefault class="bg-blue-500 text-white rounded-lg h-10"&gt;Primary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-gray-500 text-white rounded-lg h-10"&gt;Secondary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-green-500 text-white rounded-lg h-10"&gt;Success&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-warning text-white rounded-lg h-10"&gt;Warning&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-danger text-white rounded-lg h-10"&gt;Danger&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-white border border-black rounded-lg text-black h-10"&gt;Bordered&lt;/ButtonDefault&gt;</pre>
      <button @click="copyCode(`<ButtonDefault class='bg-blue-500 text-white rounded-lg h-10'>Primary</ButtonDefault>
<ButtonDefault class='bg-gray-500 text-white rounded-lg h-10'>Secondary</ButtonDefault>
<ButtonDefault class='bg-green-500 text-white rounded-lg h-10'>Success</ButtonDefault>
<ButtonDefault class='bg-warning text-white rounded-lg h-10'>Warning</ButtonDefault>
<ButtonDefault class='bg-danger text-white rounded-lg h-10'>Danger</ButtonDefault>
<ButtonDefault class='bg-white border border-black rounded-lg text-black h-10'>Bordered</ButtonDefault>`, 'rounded')"
        class="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded">
        {{ copied === 'rounded' ? 'Copied!' : 'Copy' }}
      </button>
    </div>

    <!-- Hover Buttons -->
    <p class="mb-3 mt-6">Hover Buttons</p>
    <div class="space-x-4 mb-4">
      <ButtonDefault class="bg-blue-500 hover:bg-blue-900 text-white rounded-lg h-10">Primary</ButtonDefault>
      <ButtonDefault class="bg-gray-500 hover:bg-gray-900 text-white rounded-lg h-10">Secondary</ButtonDefault>
      <ButtonDefault class="bg-green-500 hover:bg-green-900 text-white rounded-lg h-10">Success</ButtonDefault>
      <ButtonDefault class="bg-warning hover:bg-warning-900 text-white rounded-lg h-10">Warning</ButtonDefault>
      <ButtonDefault class="bg-danger hover:bg-red-900 text-white rounded-lg h-10">Danger</ButtonDefault>
      <ButtonDefault class="bg-white border hover:bg-black hover:text-white border-black rounded-lg text-black h-10">
        Bordered</ButtonDefault>
    </div>
    <div
      class="relative bg-gray-100 p-3 rounded-md text-sm font-mono dark:text-white dark:bg-black border dark:border-white">
      <pre>&lt;ButtonDefault class="bg-blue-500 hover:bg-blue-900 text-white rounded-lg h-10"&gt;Primary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-gray-500 hover:bg-gray-900 text-white rounded-lg h-10"&gt;Secondary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-green-500 hover:bg-green-900 text-white rounded-lg h-10"&gt;Success&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-warning hover:bg-warning-900 text-white rounded-lg h-10"&gt;Warning&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-danger hover:bg-red-900 text-white rounded-lg h-10"&gt;Danger&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-white border hover:bg-black hover:text-white border-black rounded-lg text-black h-10"&gt;Bordered&lt;/ButtonDefault&gt;</pre>
      <button
        @click="copyCode(`<ButtonDefault class='bg-blue-500 hover:bg-blue-900 text-white rounded-lg h-10'>Primary</ButtonDefault>
<ButtonDefault class='bg-gray-500 hover:bg-gray-900 text-white rounded-lg h-10'>Secondary</ButtonDefault>
<ButtonDefault class='bg-green-500 hover:bg-green-900 text-white rounded-lg h-10'>Success</ButtonDefault>
<ButtonDefault class='bg-warning hover:bg-warning-900 text-white rounded-lg h-10'>Warning</ButtonDefault>
<ButtonDefault class='bg-danger hover:bg-red-900 text-white rounded-lg h-10'>Danger</ButtonDefault>
<ButtonDefault class='bg-white border hover:bg-black hover:text-white border-black rounded-lg text-black h-10'>Bordered</ButtonDefault>`, 'hover')"
        class="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded">
        {{ copied === 'hover' ? 'Copied!' : 'Copy' }}
      </button>
    </div>

      <!-- other coloured buttons -->
      <p class="mb-3 mt-6">Other colours</p>
    <div class="space-x-4 mb-4">
      <ButtonDefault class="bg-success hover:bg-blue-900 text-white rounded-lg h-10 ">Primary</ButtonDefault>
      <ButtonDefault class="bg-purple-500 hover:bg-gray-900 text-white rounded-lg h-10">Secondary</ButtonDefault>
      <ButtonDefault class="bg-cyan-500 hover:bg-green-900 text-white rounded-lg h-10">Success</ButtonDefault>
      <ButtonDefault class="bg-violet-500 hover:bg-warning-900 text-white rounded-lg h-10">Warning</ButtonDefault>
      <ButtonDefault class="bg-black hover:bg-red-900 text-white rounded-lg h-10">Danger</ButtonDefault>
      <ButtonDefault class="bg-red-900 border text-white hover:bg-black hover:text-white  rounded-lg text-black h-10">
        Bordered</ButtonDefault>
    </div>
    <div
      class="relative bg-gray-100 p-3 rounded-md text-sm font-mono dark:text-white dark:bg-black border dark:border-white">
      <pre>&lt;ButtonDefault class="bg-blue-500 hover:bg-blue-900 text-white rounded-lg h-10"&gt;Primary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-gray-500 hover:bg-gray-900 text-white rounded-lg h-10"&gt;Secondary&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-green-500 hover:bg-green-900 text-white rounded-lg h-10"&gt;Success&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-warning hover:bg-warning-900 text-white rounded-lg h-10"&gt;Warning&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-danger hover:bg-red-900 text-white rounded-lg h-10"&gt;Danger&lt;/ButtonDefault&gt;
&lt;ButtonDefault class="bg-white border hover:bg-black hover:text-white border-black rounded-lg text-black h-10"&gt;Bordered&lt;/ButtonDefault&gt;</pre>
      <button
        @click="copyCode(`<ButtonDefault class='bg-blue-500 hover:bg-blue-900 text-white rounded-lg h-10'>Primary</ButtonDefault>
<ButtonDefault class='bg-gray-500 hover:bg-gray-900 text-white rounded-lg h-10'>Secondary</ButtonDefault>
<ButtonDefault class='bg-green-500 hover:bg-green-900 text-white rounded-lg h-10'>Success</ButtonDefault>
<ButtonDefault class='bg-warning hover:bg-warning-900 text-white rounded-lg h-10'>Warning</ButtonDefault>
<ButtonDefault class='bg-danger hover:bg-red-900 text-white rounded-lg h-10'>Danger</ButtonDefault>
<ButtonDefault class='bg-white border hover:bg-black hover:text-white border-black rounded-lg text-black h-10'>Bordered</ButtonDefault>`, 'hover')"
        class="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded">
        {{ copied === 'hover' ? 'Copied!' : 'Copy' }}
      </button>
    </div>
  </DefaultLayout>
</template>
