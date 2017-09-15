<template>
    <scroll @scroll="scroll"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :data="data"
            class="g-list-wrapper"
            ref="listview">
        <div class="vc-list-view">
            <div v-for="t in data" class="li-item g-box g-row g-list-padding">
                <div class="g-col-2 li-name">
                    {{t.name}}
                </div>
                <div class="g-col-6">
                    {{t.address}}
                </div>
            </div>
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll';
    export default {
        name: 'list-view',
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        methods: {
            scroll (pos) {
                console.log(pos);
            }
        },
        created () {
            this.probeType = 1;
            this.listenScroll = false;
        },
        components: {Scroll}
    };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "~common/styles/variable"
    .vc-list-view
        font-size: $t_3
        .li-item
            background-color: $c_white
            border-top: solid 1px $c_light_gray
            .li-name
                text-align: center
</style>
