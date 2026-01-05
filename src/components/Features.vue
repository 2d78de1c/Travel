<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">{{ t('message.featuresTitle') }}</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <span>🏛️</span>
          </div>
          <h3>{{ t('message.terracottaArmy') }}</h3>
          <p>{{ t('message.terracottaArmyDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <span>🏰</span>
          </div>
          <h3>{{ t('message.cityWall') }}</h3>
          <p>{{ t('message.cityWallDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <span>☪️</span>
          </div>
          <h3>{{ t('message.mosque') }}</h3>
          <p>{{ t('message.mosqueDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <span>🍜</span>
          </div>
          <h3>{{ t('message.food') }}</h3>
          <p>{{ t('message.foodDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <span>🗿</span>
          </div>
          <h3>{{ t('message.hanyangling') }}</h3>
          <p>{{ t('message.hanyanglingDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <span>📜</span>
          </div>
          <h3>{{ t('message.forestofsteles') }}</h3>
          <p>{{ t('message.forestofstelesDesc') }}</p>
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
.features {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>