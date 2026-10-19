<script setup>
import { ref } from "vue";
import Icon from "../../lib/Icon.vue";
import CodeBlock from "../components/CodeBlock.vue";
import VwCard from "../../lib/components/VwCard.vue";
import VwInput from "../../lib/components/VwInput.vue";
import VwPasswordInput from "../../lib/components/VwPasswordInput.vue";
import VwButton from "../../lib/components/VwButton.vue";
import VwSwitch from "../../lib/components/VwSwitch.vue";
import VwStat from "../../lib/components/VwStat.vue";
import VwTable from "../../lib/components/VwTable.vue";
import VwBadge from "../../lib/components/VwBadge.vue";
import VwAlert from "../../lib/components/VwAlert.vue";
const email = ref("");
const password = ref("");
const formMessage = ref("");
const settings = ref([true, false, true]);
const showSource = ref("");
const columns = [
  { key: "name", label: "Project" },
  { key: "status", label: "Status" },
  { key: "team", label: "Team" },
];
const rows = [
  { id: 1, name: "Website redesign", status: "In progress", team: "Design" },
  { id: 2, name: "Component library", status: "Complete", team: "Engineering" },
  { id: 3, name: "Launch campaign", status: "Planning", team: "Marketing" },
];
const settingsItems = [
  {
    title: "Email notifications",
    text: "The updates you need, right in your inbox.",
  },
  {
    title: "Product announcements",
    text: "New features and little things worth knowing.",
  },
  { title: "Weekly digest", text: "A comfortable overview of your week." },
];
const authSource =
  '<VwCard title="Welcome back.">\n  <form @submit.prevent="handleSubmit">\n    <VwInput v-model="email" label="Email" type="email" required />\n    <VwPasswordInput v-model="password" autocomplete="current-password" required />\n    <VwButton type="submit">Continue</VwButton>\n  </form>\n</VwCard>';
const overviewSource =
  '<div class="overview">\n  <VwStat label="Revenue" value="$24,680" change="12.8%" />\n  <VwStat label="Customers" value="1,420" change="8.2%" />\n</div>\n<VwTable :columns="columns" :rows="rows">\n  <template #cell-status="{ value }">\n    <VwBadge>{{ value }}</VwBadge>\n  </template>\n</VwTable>';
const settingsSource =
  '<VwCard title="Just your style.">\n  <VwSwitch v-model="emailNotifications" label="Email notifications" />\n  <VwSwitch v-model="announcements" label="Product announcements" />\n  <VwSwitch v-model="weeklyDigest" label="Weekly digest" />\n</VwCard>';
function submit() {
  formMessage.value =
    "Form validated. This local demo does not authenticate or send your data.";
  password.value = "";
}
</script>
<template>
  <article class="docs-article catalog-article">
    <div class="page-breadcrumb">
      <span>Beyond the individual pieces</span><span>/</span><span>Blocks</span>
    </div>
    <div class="blocks-header">
      <div class="eyebrow">BETTER TOGETHER</div>
      <h1 class="page-heading">
        From pieces<br /><span class="component-title-period"
          >to possibilities.</span
        >
      </h1>
      <p class="page-description">
        A few familiar patterns, built from the same thoughtful components. Take
        a closer look and make them your own.
      </p>
    </div>
    <section class="block-section">
      <div class="block-section-title">
        <div>
          <h2>A clear view of the big picture.</h2>
          <p>Stat, Table & Badge</p>
        </div>
        <VwButton
          variant="outline"
          size="sm"
          @click="showSource = showSource === 'overview' ? '' : 'overview'"
          ><Icon name="code" :size="13" />{{
            showSource === "overview" ? "Preview" : "Code"
          }}</VwButton
        >
      </div>
      <CodeBlock v-if="showSource === 'overview'" :code="overviewSource" />
      <div v-else class="block-preview">
        <div class="block-overview">
          <VwStat label="Total revenue" value="$24,680" change="12.8%"
            >Compared to last month</VwStat
          ><VwStat label="Customers" value="1,420" change="8.2%"
            >People who make it possible</VwStat
          ><VwStat label="Active projects" value="24" change="4 new"
            >A good kind of busy</VwStat
          >
        </div>
        <VwTable :columns="columns" :rows="rows" caption="Workspace projects"
          ><template #cell-status="{ value }"
            ><VwBadge
              :variant="value === 'Complete' ? 'success' : 'neutral'"
              dot
              >{{ value }}</VwBadge
            ></template
          ></VwTable
        >
      </div>
    </section>
    <section class="block-section">
      <div class="block-section-title">
        <div>
          <h2>A warm welcome back.</h2>
          <p>Input, PasswordInput & Button</p>
        </div>
        <VwButton
          variant="outline"
          size="sm"
          @click="showSource = showSource === 'auth' ? '' : 'auth'"
          ><Icon name="code" :size="13" />{{
            showSource === "auth" ? "Preview" : "Code"
          }}</VwButton
        >
      </div>
      <CodeBlock v-if="showSource === 'auth'" :code="authSource" />
      <div v-else class="block-preview">
        <form class="block-auth" @submit.prevent="submit">
          <span class="brand-mark"><Icon name="wind" :size="25" /></span>
          <div>
            <h3>Welcome back.</h3>
            <p>A good day to make something great.</p>
          </div>
          <VwInput
            v-model="email"
            label="Email address"
            type="email"
            autocomplete="email"
            placeholder="you@company.com"
            required
          /><VwPasswordInput
            v-model="password"
            label="Password"
            autocomplete="current-password"
            placeholder="Your password"
            required
            minlength="8"
          /><VwButton type="submit"
            >Continue <Icon name="right" :size="15" /></VwButton
          ><VwAlert
            v-if="formMessage"
            title="Looking good."
            variant="success"
            >{{ formMessage }}</VwAlert
          ><small>A local form demo. Your data stays with you.</small>
        </form>
      </div>
    </section>
    <section class="block-section">
      <div class="block-section-title">
        <div>
          <h2>A space that feels like yours.</h2>
          <p>Card & Switch</p>
        </div>
        <VwButton
          variant="outline"
          size="sm"
          @click="showSource = showSource === 'settings' ? '' : 'settings'"
          ><Icon name="code" :size="13" />{{
            showSource === "settings" ? "Preview" : "Code"
          }}</VwButton
        >
      </div>
      <CodeBlock v-if="showSource === 'settings'" :code="settingsSource" />
      <div v-else class="block-preview">
        <VwCard
          class="block-settings"
          title="Just your style."
          description="The little details that make a difference."
          ><div
            v-for="(item, i) in settingsItems"
            :key="item.title"
            class="block-setting-row"
          >
            <div>
              <strong>{{ item.title }}</strong>
              <p>{{ item.text }}</p>
            </div>
            <VwSwitch
              v-model="settings[i]"
              :label="''"
              :aria-label="item.title"
            /></div
        ></VwCard>
      </div>
    </section>
    <footer class="docs-footer">
      <span>Good components. Better together.</span
      ><RouterLink to="/docs/composition"
        >Read about composition <Icon name="right" :size="12"
      /></RouterLink>
    </footer>
  </article>
</template>
