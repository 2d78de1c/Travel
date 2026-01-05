<template>
  <section id="tours" class="tours">
    <div class="container">
      <h2 class="section-title">{{ t('message.toursTitle') }}</h2>
      <div class="tours-grid">
        <div class="tour-card">
          <div class="tour-image">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/36/95/25.jpg" alt="One-Day Terracotta Warriors Tour">
          </div>
          <div class="tour-content">
            <h3>{{ t('message.oneDayTour') }}</h3>
            <p class="tour-desc">{{ t('message.oneDayTourDesc') }}</p>
            <div class="tour-details">
              <span class="duration">{{ t('message.oneDayTourDuration') }}</span>
              <span class="price">{{ t('message.oneDayTourPrice') }}</span>
            </div>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        
        <div class="tour-card">
          <div class="tour-image">
            <img src="https://q4.itc.cn/q_70/images01/20250708/a378991d0a344604be09af64384ee56b.jpeg" alt="3-Day Ancient Capitals Tour">
          </div>
          <div class="tour-content">
            <h3>{{ t('message.threeDayTour') }}</h3>
            <p class="tour-desc">{{ t('message.threeDayTourDesc') }}</p>
            <div class="tour-details">
              <span class="duration">{{ t('message.threeDayTourDuration') }}</span>
              <span class="price">{{ t('message.threeDayTourPrice') }}</span>
            </div>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        
        <div class="tour-card">
          <div class="tour-image">
            <img src="https://dimg04.c-ctrip.com/images/0100b120008syrmpwA594_W_1024_0_Q90.jpg?proc=autoorient" alt="5-Day Cultural Heritage Tour">
          </div>
          <div class="tour-content">
            <h3>{{ t('message.fiveDayTour') }}</h3>
            <p class="tour-desc">{{ t('message.fiveDayTourDesc') }}</p>
            <div class="tour-details">
              <span class="duration">{{ t('message.fiveDayTourDuration') }}</span>
              <span class="price">{{ t('message.fiveDayTourPrice') }}</span>
            </div>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        
        <div class="tour-card">
          <div class="tour-image">
            <img src="https://dimg04.c-ctrip.com/images/0105c120008syrrjfDF15_W_1024_0_Q90.jpg?proc=autoorient" alt="Custom Private Tour">
          </div>
          <div class="tour-content">
            <h3>{{ t('message.customTour') }}</h3>
            <p class="tour-desc">{{ t('message.customTourDesc') }}</p>
            <div class="tour-details">
              <span class="duration">{{ t('message.customTourDuration') }}</span>
              <span class="price">{{ t('message.customTourPrice') }}</span>
            </div>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.tours {
  padding: 5rem 0;
  background-color: white;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.tour-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s;
}

.tour-card:hover {
  transform: translateY(-10px);
}

.tour-image {
  height: 200px;
  overflow: hidden;
}

.tour-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.tour-card:hover .tour-image img {
  transform: scale(1.1);
}

.tour-content {
  padding: 1.5rem;
}

.tour-content h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.tour-desc {
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tour-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #34495e;
}

.duration {
  font-weight: 500;
}

.price {
  font-weight: bold;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .tours-grid {
    grid-template-columns: 1fr;
  }
}
</style>