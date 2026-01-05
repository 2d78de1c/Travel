<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <h2 class="section-title">{{ t('message.testimonialsTitle') }}</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>{{ t('message.testimonial1') }}</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👨</div>
            <div class="author-info">
              <h4>{{ t('message.author1') }}</h4>
              <p>{{ t('message.trip1') }}</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>{{ t('message.testimonial2') }}</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👩</div>
            <div class="author-info">
              <h4>{{ t('message.author2') }}</h4>
              <p>{{ t('message.trip2') }}</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>{{ t('message.testimonial3') }}</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👨</div>
            <div class="author-info">
              <h4>{{ t('message.author3') }}</h4>
              <p>{{ t('message.trip3') }}</p>
            </div>
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
.testimonials {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 5rem;
  color: var(--primary-color);
  opacity: 0.2;
  font-family: serif;
  line-height: 1;
}

.testimonial-content {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  padding-top: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  font-size: 2rem;
  margin-right: 1rem;
}

.author-info h4 {
  color: var(--secondary-color);
  margin-bottom: 0.2rem;
}

.author-info p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>