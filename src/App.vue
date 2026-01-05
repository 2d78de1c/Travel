<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Destinations from './components/Destinations.vue';
import Features from './components/Features.vue';
import Tours from './components/Tours.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';

const { locale } = useI18n();

// 从cookie获取语言设置
const getLocaleFromCookie = (): string => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('locale=')) {
      const locale = cookie.substring('locale='.length);
      if (locale === 'en' || locale === 'zh') {
        return locale;
      }
    }
  }
  return 'en'; // 默认语言为英语
};

// 设置语言到cookie
const setLocaleToCookie = (locale: string) => {
  const date = new Date();
  date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30天
  document.cookie = `locale=${locale}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

const toggleLanguage = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh';
  locale.value = newLocale;
  setLocaleToCookie(newLocale);
};

// 页面加载时检查cookie中的语言设置
onMounted(() => {
  const savedLocale = getLocaleFromCookie();
  if (savedLocale !== locale.value) {
    locale.value = savedLocale;
  }
});
</script>

<template>
  <div id="app">
    <div class="language-switcher">
      <button @click="toggleLanguage" class="lang-btn">
        {{ locale === 'zh' ? 'EN' : '中文' }}
      </button>
    </div>
    <Header />
    <Hero />
    <Destinations />
    <Features />
    <Tours />
    <Testimonials />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  width: 100%;
}

.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
}

.lang-btn {
  background-color: #3498db; /* 使用具体颜色值替代CSS变量 */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.lang-btn:hover {
  background-color: #2980b9;
}
</style>