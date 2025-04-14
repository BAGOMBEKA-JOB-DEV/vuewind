<template>
    <div class="mx-auto w-full mb-4">
        <!-- Label -->
        <label class="text-base text-black font-light mb-2 block">Upload Excel File</label>

        <!-- Input Container -->
        <div class="relative flex items-center w-full border border-black">
            <!-- Placeholder Text and File Name Display -->
            <input v-model="fileName" type="text" placeholder="Upload a file" readonly
                class="w-full h-[52px] px-4 text-gray-400 bg-white outline-none cursor-default"
                :class="{ 'text-black': fileName !== '', 'text-gray-400': fileName === '' }" />

            <!-- File Input and Choose File Button -->
            <label for="fileInput"
                class="flex items-center text-[18px] justify-center cursor-pointer h-[52px] w-[238px] bg-secondary-400 hover:bg-secondary-500 text-white font-bold">
                <!-- Upload Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 mr-2 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25
   0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0
    0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25
     0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>


                Choose File
            </label>

            <!-- Hidden File Input -->
            <input id="fileInput" type="file" class="hidden" @change="handleFileChange" accept=".csv, .xls, .xlsx" />
        </div>

        <!-- Help Text -->
        <p class="text-xs text-gray-400 mt-2">
            <i>Upload CSV or Excel File</i>
        </p>
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-xs text-red-500 mt-2">
            {{ errorMessage }}
        </p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: "", // Placeholder for file name
            errorMessage: "", // Error message for invalid file types
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            const validExtensions = ["csv", "xls", "xlsx"];

            if (file) {
                const fileExtension = file.name.split(".").pop().toLowerCase();

                if (validExtensions.includes(fileExtension)) {
                    this.fileName = file.name; // Update file name dynamically
                    this.errorMessage = ""; // Clear error message
                } else {
                    this.fileName = ""; // Reset file name
                    this.errorMessage = "Invalid file type. Only CSV and Excel files are allowed.";
                }
            }
        },
    },
};
</script>