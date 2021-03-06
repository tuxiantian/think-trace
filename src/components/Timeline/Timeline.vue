<template>
  <div
    style="margin:0 auto;width:400px"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
  >
    <ul class="timeline" ref="timeline">
      <li
        class="timeline-item"
        :style="itemStyle"
        v-for="item in items"
        v-bind:key="item.createDate"
      >
        <div class="tag">{{item.createDate}}</div>
        <template v-if="item.active">
          <div
            class="timeline-circle"
            style="border-color: #9dd8e0;background-color:#9dd8e0"
            ref="others"
          ></div>
        </template>
        <template v-else>
          <div class="timeline-circle" ref="others"></div>
        </template>
        <ul class="one-day">
          <li v-for="timelineItem in item.timelineItems" v-bind:key="timelineItem.timelineId">
            {{timelineItem.createTime.split("T")[1]}}
            <template
              v-if="timelineItem.cardType=='todoList'"
            >
              <router-link :to="'/todo/'+timelineItem.itemId">{{timelineItem.cardType}}</router-link>
            </template>
            <template v-else-if="timelineItem.cardType=='factOpinion'">
              <router-link :to="'/factOpinionCard/'+timelineItem.itemId">{{timelineItem.cardType}}</router-link>
            </template>
            <template v-else-if="timelineItem.cardType=='whyHowWhat'">
              <router-link :to="'/whyHowWhatCard/'+timelineItem.itemId">{{timelineItem.cardType}}</router-link>
            </template>
            <template v-else-if="timelineItem.cardType=='twoDimensionTable'">
              <router-link :to="'/twoDimensionTable/'+timelineItem.itemId">{{timelineItem.cardType}}</router-link>
            </template>
            <template v-else-if="timelineItem.cardType=='preferenceRank'">
              <router-link
                :to="'/preferenceRankView/'+timelineItem.itemId"
              >{{timelineItem.cardType}}</router-link>
            </template>
            <template v-else-if="timelineItem.cardType=='article'">
              <router-link :to="'/article/view/'+timelineItem.itemId">{{timelineItem.cardType}}</router-link>
              <router-link :to="'/article/'+timelineItem.itemId">edit</router-link>
            </template>
            <template v-else-if="timelineItem.cardType=='imageGallery'">
              <router-link :to="'/imageGallery/'+timelineItem.itemId">{{timelineItem.cardType}}</router-link>
            </template>
          </li>
        </ul>

        <slot />
      </li>
    </ul>
    <p v-if="loading" style="margin-top:10px;" class="loading">
      <span></span>
    </p>
    <p v-if="noMore" style="margin-top:10px;font-size:13px;color:#ccc">没有更多了</p>
  </div>
</template>

<script>
import { pageTimelineItem } from "../../api/api";
import { formatDate } from "@/utils/date";

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
      items: [], //后端返回的数组
      pageNo: 1, //起始页数值为0
      loading: false,
      pageCount: "" //取后端返回内容的总页数
    };
  },

  mounted() {
    const timeline = this.$refs.timeline;
    timeline.style.setProperty("--timelineTheme", this.timelineTheme);
    timeline.style.setProperty("--timelineBg", this.timelineBg);
  },
  created() {
    this.getData();
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
    },
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.pageNo > this.pageCount;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      //滑到底部时进行加载
      this.loading = true;
      setTimeout(() => {
        this.pageNo += 1; //页数+1
        this.getData(); //调用接口，此时页数+1，查询下一页数据
      }, 2000);
    },
    getData() {
      pageTimelineItem({ pageNo: this.pageNo, pageSize: 10 }).then(res => {
        this.items = res.data;
        this.pageCount = res.pageCount;
        console.log(this.items);
      });
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
.one-day {
  list-style: none;
}
.one-day li {
  line-height: 30px;
  height: 30px;
}

.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #409eff;
  border-left: transparent;
  animation: zhuan 0.5s linear infinite;
  border-radius: 50%;
}
@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
