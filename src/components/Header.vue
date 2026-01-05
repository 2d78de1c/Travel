<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h2>{{ t('message.xianTourism') }}</h2>
      </div>
      <nav class="nav" :class="{ active: mobileMenuOpen }">
        <ul>
          <li><a href="#home">{{ t('message.home') }}</a></li>
          <li><a href="#destinations">{{ t('message.destinations') }}</a></li>
          <li><a href="#tours">{{ t('message.tours') }}</a></li>
        </ul>
      </nav>
      <div class="mobile-menu-btn" @click="toggleMobileMenu">
        <span :class="{ 'close': mobileMenuOpen }"></span>
        <span :class="{ 'close': mobileMenuOpen }"></span>
        <span :class="{ 'close': mobileMenuOpen }"></span>
      </div>
    </div>
    
    <!-- Mobile menu overlay -->
    <div class="mobile-menu-overlay" v-if="mobileMenuOpen" @click="toggleMobileMenu"></div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo h2 {
  color: #2c3e50;
  font-size: 1.8rem;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #34495e;
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover {
  color: #e74c3c; /* 更符合国外风格的红色 */
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1002;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: #34495e;
  margin: 3px 0;
  transition: 0.3s;
  transform-origin: center;
}

/* Hamburger to close animation */
.mobile-menu-btn span:nth-child(1).close {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn span:nth-child(2).close {
  opacity: 0;
}

.mobile-menu-btn span:nth-child(3).close {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    z-index: 1000;
  }
  
  .nav.active {
    right: 0;
  }
  
  .nav ul {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu-overlay {
    display: block;
  }
  
  .mobile-menu-overlay.active {
    display: block;
  }
}
</style>