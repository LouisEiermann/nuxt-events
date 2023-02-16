<template>
  <div>
    Nuxt module playground!
    <button @click="emitEvent">
      Press me to emit an event...
    </button>
    <h1>The Button was clicked {{ timesClicked }} times!</h1>
  </div>
</template>

<script setup lang="ts">
  const { $events } = useNuxtApp()

  const timesClicked = ref(0)

  const eventHandler = () => {
    console.log("An Event was handled!")
    timesClicked.value = timesClicked.value + 1
  }

  const emitEvent = () => {
    $events.emit('BUTTON_CLICKED', 'BUTTON_CLICKED')
  }

  $events.on('BUTTON_CLICKED', eventHandler)
</script>
