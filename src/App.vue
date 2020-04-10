<template>
  <timeline>
    <timeline-item>item1</timeline-item>
    <timeline-item :active="true">item2</timeline-item>
    <timeline-item>item3</timeline-item>
  </timeline>
</template>

<script>
import Timeline from '@/components/Timeline/Timeline.vue';
import TimelineItem from '@/components/Timeline/TimelineItem.vue';

export default {
  components: {
    Timeline,
    TimelineItem
  }
};
</script>