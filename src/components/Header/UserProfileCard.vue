<script setup lang="js">
import { ref } from 'vue'
import InputGroup from '../Forms/InputGroup.vue'
import userPhoto from '@/assets/images/user/user-03.png' // Default image
import MessageTextArea from '../Forms/MessageTextArea.vue'

const formData = ref({
    fullName: 'Bagombeka Job',
    phoneNumber: '+256 77 8480 981',
    emailAddress: 'bagombekajob@gmail.com',
    username: 'job_bagombeka',
    bio: 'Bagombeka Job is a Ugandan software developer and internet entrepreneur based in Kampala. With over five years of experience, he specializes in full-stack development, working with technologies such as Vue, CSS, JavaScript, C++, PHP, Java, and SQL.'
})

const fileName = ref('') // Store file name
const uploadedImage = ref(null) // Store uploaded image

const handleSubmit = () => {
    // Handle form submission for personal information
}

const handleCancel = () => {
    // Handle cancel action for personal information
}

const handlePhotoSubmit = () => {
    // Handle form submission for user photo
}

const handleFileChange = (event) => {
    const file = event.target.files[0] // Get the first file
    if (file) {
        fileName.value = file.name // Store the file name
        const reader = new FileReader()
        reader.onload = () => {
            uploadedImage.value = reader.result // Store the uploaded image
        }
        reader.readAsDataURL(file) // Convert file to base64 data URL
    }
}

const handlePhotoCancel = () => {
    // Handle cancel action for user photo
}

const deletePhoto = () => {
    // Handle delete action for user photo
    uploadedImage.value = null
    fileName.value = ''
}

const updatePhoto = () => {
    // Handle update action for user photo
}
</script>

<template>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <!-- Personal Information Section -->
        <div class="col-span-5 lg:col-span-3">
            <div class="rounded-sm border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
                <div class="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 class="font-semibold text-black dark:text-white">Your Profile</h3>
                </div>
                <div class="p-7">
                    <form @submit.prevent="handleSubmit">
                        <!-- Full Name Section -->
                        <div class="mb-5 flex flex-col gap-6 sm:flex-row">
                            <InputGroup v-model="formData.fullName" label="Full Name" type="text" placeholder="Bagombeka Job" customClasses="w-full xl:w-1/2 rounded-none" />
                            <InputGroup v-model="formData.phoneNumber" label="Phone Number" type="text" placeholder="+256 77 8480 981" customClasses="w-full xl:w-1/2 rounded-none" />
                        </div>

                        <!-- Email Address Section -->
                        <div class="mb-5">
                            <InputGroup v-model="formData.emailAddress" label="Email Address" type="email" placeholder="bagombekajob@gmail.com" customClasses="w-full rounded-none" />
                        </div>

                        <!-- Username Section -->
                        <div class="mb-5">
                            <InputGroup v-model="formData.username" label="User Name" type="text" placeholder="job" customClasses="w-full   rounded-none" />
                        </div>

                        <!-- Bio Section -->
                        <div class="mb-5">
                            <MessageTextArea v-model="formData.bio" label="About" placeholder="My name is Bagombeka Job and I do this..." />
                        </div>

                        <!-- Save and Cancel Buttons -->
                        <div class="flex justify-end gap-4.5">
                            <button
                                class="flex xl:w-40 w-full justify-center rounded bg-red-600 hover:bg-red-500 border border-stroke py-2 px-6 font-medium text-white dark:border-strokedark dark:text-white"
                                type="button" @click="handleCancel">
                                Cancel
                            </button>
                            <button
                                class="flex xl:w-40 w-full justify-center rounded bg-primary-700 py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Profile Picture Section -->
        <div class="col-span-5 lg:col-span-2">
            <div class="rounded-sm border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
                <div class="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 class="font-medium text-black dark:text-white">Your Profile Picture</h3>
                </div>
                <div class="p-7">
                    <form @submit.prevent="handlePhotoSubmit">
                        <!-- User Photo Display -->
                        <div class="mb-4 items-center gap-3">
                            <div class="w-full h-auto mb-2 xl:lg:max-h-60 h-auto">
                                <img class="rounded-sm mb-2 xl:lg:max-h-60 h-auto w-full"  :src="uploadedImage || userPhoto" alt="User" />
                            </div>
                              <!-- Display File Name -->
                        <div v-if="fileName" class=" mb-2 w-full  text-sm text-gray-500 dark:text-gray-300">
                            {{ fileName }}
                        </div>
                            <div>
                                <span class="mb-3 font-medium text-black dark:text-white">Edit your profile picture</span>
                            </div>
                        </div>

                        <!-- File Upload Section -->
                        <div class="relative mb-5.5 w-full cursor-pointer border-2 border-dashed border-primary py-4 px-4 rounded-md bg-gray-50 dark:bg-meta-4 sm:py-7.5">
                            <input type="file" accept="image/*"
                                class="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer opacity-0 outline-none"
                                @change="handleFileChange" />
                            <div class="flex flex-col items-center justify-center space-y-3">
                                <span class="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z" fill="#3C50E0" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z" fill="#3C50E0" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z" fill="#3C50E0" />
                                    </svg>
                                </span>
                                <p class="text-sm font-medium">
                                    <span class="text-primary">Click to upload</span> or drag and drop
                                </p>
                                <p class="mt-1.5 text-sm font-medium">SVG, PNG, JPG or GIF</p>
                                <p class="text-sm font-medium">(max, 800 X 800px)</p>
                            </div>
                        </div>


                        <!-- Save and Cancel Buttons for Photo Section -->
                        <div class="flex justify-end gap-4.5">
                            <button
                                class="flex bg-red-600 hover:bg-red-500 justify-center rounded border border-stroke py-2 px-6 font-medium text-white dark:border-strokedark dark:text-white"
                                type="button" @click="deletePhoto">
                                Delete
                            </button>
                            <button
                                class="flex justify-center rounded bg-secondary-600 py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                type="submit">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
