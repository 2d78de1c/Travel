<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t('message.xianTourism') }}</h3>
          <p>{{ t('message.companyDesc') }}</p>
          <div class="social-links">
            <a href="#"><i>📘</i></a>
            <a href="#"><i>📷</i></a>
            <a href="#"><i>🐦</i></a>
            <a href="#"><i>📱</i></a>
          </div>
        </div>
        <div class="footer-section">
          <h4>{{ t('message.quickLinks') }}</h4>
          <ul>
            <li><a href="#home">{{ t('message.home') }}</a></li>
            <li><a href="#destinations">{{ t('message.destinations') }}</a></li>
            <li><a href="#tours">{{ t('message.tours') }}</a></li>
            <li><a href="#about">{{ t('message.about') }}</a></li>
            <li><a href="#contact">{{ t('message.contact') }}</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>{{ t('message.contactInfo') }}</h4>
          <ul>
            <li>{{ t('message.phone') }}</li>
            <li>{{ t('message.email') }}</li>
            <li>{{ t('message.address') }}</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>{{ t('message.newsletter') }}</h4>
          <p>{{ t('message.newsletterDesc') }}</p>
          <form class="newsletter" @submit.prevent="subscribeToNewsletter">
            <input 
              type="email" 
              v-model="email" 
              :placeholder="t('message.email')" 
              required
            >
            <button type="submit">{{ t('message.subscribe') }}</button>
          </form>
          <div v-if="subscriptionMessage" class="subscription-message">
            {{ subscriptionMessage }}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ t('message.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const email = ref('');
const subscriptionMessage = ref('');

const subscribeToNewsletter = () => {
  // In a real application, this would send the email to a backend service
  console.log('Subscribing email:', email.value);
  subscriptionMessage.value = 'Thank you for subscribing to our newsletter!';
  email.value = '';
  
  // Clear the message after 5 seconds
  setTimeout(() => {
    subscriptionMessage.value = '';
  }, 5000);
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 3rem 0 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e74c3c; /* 西安主题红色 */
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #e74c3c; /* 西安主题红色 */
}

.footer-section p {
  margin-bottom: 1rem;
  color: #ecf0f1;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #e74c3c; /* 西安主题红色 */
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  display: inline-block;
  font-size: 1.5rem;
}

.newsletter {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.newsletter input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.newsletter button {
  background-color: #e74c3c; /* 西安主题红色 */
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter button:hover {
  background-color: #c0392b;
}

.subscription-message {
  color: #2ecc71;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #34495e;
  color: #bdc3c7;
}
</style>