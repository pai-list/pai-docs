<script setup lang="ts">
import { withBase } from 'vitepress';
</script>

<template>
  <section class="pai-hero">
    <div class="pai-orb pai-orb-one"></div>
    <div class="pai-orb pai-orb-two"></div>
    <p class="eyebrow">PI NETWORK × ARTIFICIAL INTELLIGENCE</p>
    <h1>Build agents<br /><span>with agency.</span></h1>
    <p class="copy">
      PAI is the open agent layer for Pi Network—identity, trust, payments, and skills in
      one composable toolkit.
    </p>
    <div class="actions">
      <a class="action primary" :href="withBase('/getting-started/overview')"
        >Start building <span>→</span></a
      >
      <a class="action secondary" href="https://github.com/pai-list"
        >View on GitHub <span>↗</span></a
      >
    </div>
    <div class="hero-grid" aria-label="PAI capabilities">
      <div><b>01</b><strong>Portable identity</strong><span>DID-native agents</span></div>
      <div><b>02</b><strong>Verifiable trust</strong><span>Proof, not promises</span></div>
      <div><b>03</b><strong>Native payments</strong><span>Earn in Pi</span></div>
    </div>
  </section>
</template>
