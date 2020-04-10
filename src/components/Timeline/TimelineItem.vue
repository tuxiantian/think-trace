<template>
  <li class="timeline-item" :style="itemStyle">
    <div class="timeline-circle" :class="slotClass" :style="circleStyle" ref="others">
      <slot name="others" />
    </div>
    <slot />
  </li>
</template>

<script>
export default {
  name: "TimelineItem",

  props: {
    active: {
      type: Boolean,
      default: false
    },
    lineColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: ""
    },
    fontColor: {
      type: String,
      default: "#37414a"
    }
  },

  data() {
    return {
      slotOthers: false,
      iconSizeData: {
        small: {
          top: ".28em",
          left: "-34px",
          width: "10px",
          height: "10px"
        },
        medium: {
          top: "0em",
          left: "-39.5px",
          height: "20px",
          width: "20px"
        },
        large: {
          top: "-0.5em",
          left: "-44px",
          height: "30px",
          width: "30px"
        }
      }
    };
  },

  computed: {
    circleStyle() {
      if (!this.active && !this.lineColor && !this.iconSize) return;
      let style = {};
      if(this.active){
          style = {
            'border-color': '#9dd8e0',
            'background-color': '#9dd8e0'
          }
      }
      if (this.lineColor) {
        style = Object.assign({}, style, {
          "border-color": this.lineColor
        });
      }
      if (this.iconSizeData[this.iconSize]) {
        style = Object.assign({}, style, this.iconSizeData[this.iconSize]);
      }
      return style;
    },
    itemStyle() {
      return {
        color: this.fontColor
      };
    },
    slotClass() {
      let className = "";
      if (this.slotOthers) {
        className = "timeline-others";
      }
      if (this.active) {
        className = "active";
      }

      return className;
    }
  },

  mounted() {
    this.slotOthers = !!this.$refs.others.innerHTML;
  }
};
</script>

