<template>
  <q-page>
    <div class="q-pa-sm">
      <!-- এই div-এর উপর আমরা gsap animation চালাবো -->
      <div ref="formContainer">
        <!-- Quasar ফর্ম: submit এবং reset event handle -->
        <q-form @submit="submitForm" @reset="resetForm" class="q-gutter-md">
          <!-- Name Input -->
          <q-input
            v-model="form.name"
            label="Name"
            :rules="[(val) => !!val || 'Name is required']"
            filled
          />

          <!-- Email Input -->
          <q-input
            v-model="form.email"
            label="Email"
            :rules="[
              (val) => !!val || 'Email is required',
              (val) => /.+@.+\..+/.test(val) || 'Invalid email',
            ]"
            filled
          />

          <!-- Message Input -->
          <q-input
            v-model="form.message"
            label="Message"
            type="textarea"
            :rules="[(val) => !!val || 'Message is required']"
            filled
          />

          <!-- Submit ও Reset বাটন -->
          <div class="row q-col-gutter-sm">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="secondary" flat />
          </div>

          <!-- সফলভাবে সাবমিট হলে success message দেখাবো -->
          <q-banner
            v-if="successMessage"
            ref="successBanner"
            class="bg-green-2 text-green-10 q-mt-md"
          >
            {{ successMessage }}
          </q-banner>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// প্রয়োজনীয় মডিউল ইমপোর্ট
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'
import gsap from 'gsap'

// reactive ফর্ম অবজেক্ট, নাম-ইমেইল-মেসেজ
const form = ref({
  name: '',
  email: '',
  message: '',
})

// Success message দেখানোর জন্য reactive ভ্যারিয়েবল
const successMessage = ref('')

// gsap animation চালানোর জন্য ref
const formContainer = ref(null)
const successBanner = ref(null)

// ফর্ম সাবমিট করার ফাংশন
const submitForm = async () => {
  try {
    // Django backend-এ ফর্মের ডেটা পাঠানো
    await axios.post('http://127.0.0.1:8000/api/contact/', form.value)

    // success message set করা
    successMessage.value = 'Message sent successfully!'

    // ফর্ম রিসেট করা
    resetForm()

    // DOM আপডেট হওয়ার পর successBanner animate করা হবে
    await nextTick(() => {
      gsap.from(successBanner.value, {
        duration: 0.6,
        y: -20,
        opacity: 0,
        ease: 'power2.out',
      })
    })
  } catch (error) {
    console.error('Submission failed:', error)
  }
}

// ফর্ম রিসেট করার ফাংশন
const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    message: '',
  }
}

// পেজ লোড হলে ফর্মটি animate করে ঢুকবে
onMounted(() => {
  gsap.from(formContainer.value, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out',
  })
})
</script>
