
<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <!-- 一个插槽 -->
            <slot></slot>
        </div>
        <!-- 下面的小圆点 -->
        <div class="dots">
            <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index"></span>

        </div>
    </div>
</template>

<script>
// 滚动插件，一个横向的自动滚动的 better-scroll 不就是一个轮播图吗？
import BScroll from 'better-scroll'
// 添加一个类样式
import { addClass } from 'common/js/dom'
export default {
    data() {
        return {
            dots: [],
            currentPageIndex: 0
        }
    },
    props: {
        // 是否重复轮播,最后一张完后，播放第一张
        loop: { type: Boolean, default: true },
        // 自动播放下一张
        autoPlay: { type: Boolean, default: true },
        // 播放间隔时间
        interval: { type: Number, default: 4000 }
    },
    mounted() {
        // BScroll 需要保证 DOM 完全加载，这里写20 ms 后再去初始化
        setTimeout(() => {
            this._setSliderWidth()
            this._initDots()
            this._initSlider()
        }, 20)
    },
    methods: {
        // 设置 BScroll（或是此组件） 的宽度
        _setSliderWidth(isResize) {
            this.children = this.$refs.sliderGroup.children
            let width = 0
            let sliderWidth = this.$refs.slider.clientWidth
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i]
                addClass(child, 'slider-item')

                child.style.width = sliderWidth + 'px'
                width += sliderWidth
            }
            // 如果要实现最后一张完后，播放第一张，则要拼接一个自身
            if (this.loop)
                width += 2 * sliderWidth
            this.$refs.sliderGroup.style.width = width + 'px'


        },
        _initSlider() {
            // 第一个参数：要设置滚动的容器
            this.slider = new BScroll(this.$refs.slider, {
                // 开启横向滚动
                scrollX: true,
                // 关闭上下滚动
                scrollY: false,
                // 关闭手指停止滑动后的惯性
                momentum: false,
                // 这个配置是为了做 slide 组件用的
                snap: true,
                // 循环滚动
                snapLoop: this.loop,
                // 阈值
                snapThreshold: 0.3,
                snapSpeed: 400,
                click: true

            })
            this.slider.on('scrollEnd', () => {
                let pageIndex = this.slider.getCurrentPage().pageX
                if (this.loop)
                    pageIndex -= 1

                this.currentPageIndex = pageIndex
            })
        },
        _initDots() {
            this.dots = new Array(this.children.length)
        },
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>