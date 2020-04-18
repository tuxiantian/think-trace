<template>
  <div style="margin:0 auto;width:400px">
      <ul class="timeline" ref="timeline">
        <li class="timeline-item" :style="itemStyle" v-for="item in items" v-bind:key="item.tag">
          <div class="tag">{{item.tag}}</div>
          <template v-if="item.active">
            <div
              class="timeline-circle"
              style="border-color: #9dd8e0;background-color:#9dd8e0"
              ref="others"
            >
              <slot name="others" />
            </div>
          </template>
          <template v-else>
            <div class="timeline-circle" ref="others">
              <slot name="others" />
            </div>
          </template>
          {{item.content}}
          <slot />
        </li>
      </ul>
    </div>
</template>

<script>
import MainLayout from "@/Main.vue";

export default {
  name: "Timeline",
  props: {
    timelineTheme: {
      type: String,
      default: "#dbdde0"
    },
    timelineBg: {
      type: String,
      default: "#fff"
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
      },
      items: [
        { tag: "2020-04-10", active: false, content: "go swimming" },
        { tag: "2020-04-09", active: true, content: "go to work" },
        { tag: "2020-04-08", active: false, content: "go shopping" }
      ]
    };
  },

  mounted() {
    const timeline = this.$refs.timeline;
    timeline.style.setProperty("--timelineTheme", this.timelineTheme);
    timeline.style.setProperty("--timelineBg", this.timelineBg);
    this.slotOthers = !!this.$refs.others.innerHTML;
  },

  computed: {
    circleStyle() {
      if (!this.lineColor && !this.iconSize) return;
      let style = {};
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
    }
  }
};
</script>

<style>
.tag {
  position: absolute;
  left: -40%;
}
.timeline {
  padding: 0;
  position: relative;
  list-style: none;
  font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB,
    Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 10px 20px;
}

.timeline:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: var(--timelineTheme);
}

.timeline-item {
  position: relative;
  margin: 1.5em 0 0 28px;
  padding-bottom: 1.5em;
  border-bottom: 1px dotted var(--timelineTheme);
}
.timeline-item:last-child {
  border-bottom: none;
}
.timeline-circle {
  position: absolute;
  top: 0.28em;
  left: -34px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid var(--timelineTheme);
  background-color: var(--timelineTheme);
  z-index: 1;
  box-sizing: content-box;
  background-color: var(--timelineBg);
}

.timeline-circle .active {
  border-color: "#9dd8e0";
  background-color: "#9dd8e0";
}

.timeline-title {
  position: relative;
  display: inline-block;
  /**
     * BFC inline-block 元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素）
     */
  cursor: crosshair;
  margin: -0.15em 0 15px 28px;
}
.timeline-title:not(:first-child) {
  margin-top: 28px;
}
.timeline-title-circle {
  left: -36px;
  top: 0.15em;
  width: 16px;
  height: 16px;
}
.timeline-others {
  width: 40px;
  height: auto;
  top: 0.2em;
  left: -48px;
  line-height: 1;
  padding: 2px 0;
  text-align: center;
  border: none;
  background-color: var(--timelineBg);
}
</style>
