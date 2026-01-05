<template>
  <section id="destinations" class="destinations">
    <div class="container">
      <h2 class="section-title">{{ t('message.destinationsTitle') }}</h2>
      <div class="destinations-grid">
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/87/65/e2.jpg" alt="Terracotta Army">
            <div class="destination-overlay">
              <h3>{{ t('message.terracotta') }}</h3>
              <p>{{ t('message.terracottaDesc') }}</p>
            </div>
          </div>
          <div class="destination-details">
            <p>{{ t('message.terracottaDetail') }}</p>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/2b/c2/bb.jpg" alt="City Wall">
            <div class="destination-overlay">
              <h3>{{ t('message.citywall') }}</h3>
              <p>{{ t('message.citywallDesc') }}</p>
            </div>
          </div>
          <div class="destination-details">
            <p>{{ t('message.citywallDetail') }}</p>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cc/ee/7d/big-wild-goose-pagoda.jpg?w=700&h=400&s=1" alt="Giant Wild Goose Pagoda">
            <div class="destination-overlay">
              <h3>{{ t('message.giantwildgoose') }}</h3>
              <p>{{ t('message.giantwildgooseDesc') }}</p>
            </div>
          </div>
          <div class="destination-details">
            <p>{{ t('message.giantwildgooseDetail') }}</p>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/15/42/c5/photo3jpg.jpg?w=700&h=400&s=1" alt="Muslim Quarter">
            <div class="destination-overlay">
              <h3>{{ t('message.muslimquarter') }}</h3>
              <p>{{ t('message.muslimquarterDesc') }}</p>
            </div>
          </div>
          <div class="destination-details">
            <p>{{ t('message.muslimquarterDetail') }}</p>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d7/96/31/great-calligraphy-collection.jpg?w=1000&h=-1&s=1" alt="Small Wild Goose Pagoda">
            <div class="destination-overlay">
              <h3>{{ t('message.smallwildgoose') }}</h3>
              <p>{{ t('message.smallwildgooseDesc') }}</p>
            </div>
          </div>
          <div class="destination-details">
            <p>{{ t('message.smallwildgooseDetail') }}</p>
            <button class="btn btn-primary">{{ t('message.learnMore') }}</button>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f8/46/92/the-time-honoured-bell.jpg?w=700&h=-1&s=1" alt="Bell Tower">
            <div class="destination-overlay">
              <h3>{{ t('message.belltower') }}</h3>
              <p>{{ t('message.belltowerDesc') }}</p>
            </div>
          </div>
          <div class="destination-details">
            <p>{{ t('message.belltowerDetail') }}</p>
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
.destinations {
  padding: 5rem 0;
  background-color: white;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.destination-card {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s;
  background: white;
}

.destination-card:hover {
  transform: scale(1.03);
}

.destination-image {
  width: 100%;
  height: 250px;
  position: relative;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.destination-card:hover .destination-image img {
  transform: scale(1.1);
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1.5rem 1.5rem 1rem;
  text-align: center;
}

.destination-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.destination-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.destination-details {
  padding: 1.5rem;
}

.destination-details p {
  margin-bottom: 1rem;
  color: #34495e;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .destination-image {
    height: 200px;
  }
}
</style>