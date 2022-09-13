<script>
    export let TOTALMILES;
    export let CURRENTMILES;
    const FINISHEDPCT = `${Math.round((CURRENTMILES / TOTALMILES) * 100)}%`;
</script>

<div class="nav-bar">
    <div class="squiggle-wrapper dark">
        <div class="circle circle1" />
        <div class="circle circle2" />
    </div>
    <div class="squiggle-wrapper">
        <div class="circle circle1" />
        <div class="circle circle2" />
    </div>
    <div class="hiker-wrapper">
        <div id="pixel-hiker" style="--done:{FINISHEDPCT}">
            <img alt="illustration of nico" src="img/nicohiking.gif" />
        </div>
    </div>
</div>

<style lang="scss">
    @import "node_modules/pixel-borders/src/styles/pixel-borders/pixel-borders-mixins";

    @import "./colors.scss";

    @mixin squiggle($color) {
        position: absolute;
        width: 100%;
        height: 20px;
        background: radial-gradient(
            16px,
            transparent,
            transparent 4px,
            $color 4px,
            $color 10px,
            transparent 11px
        );
        background-size: 30px 40px;
    }

    @mixin bar-width(){
        width: 270px;

        @media(min-width:480px){
            width:360px;
        }
        @media(min-width:800px){
            width: 690px;
        }
        @media(min-width: 1024px){
            width:900px;
        }
    }

    .nav-bar {
        position: fixed;
        font-family: Atlantis;
        top: 0;
        z-index: 8;
        width: 100%;
        max-width: 1536px;
        left:50%;
        transform:translateX(-50%);
        height: 84px;
        overflow: hidden;
        background-color: $paper-bg;
        @include pixel-borders($corner-size: 2, $border-color: $paper-contrast);


    }

    .hiker-wrapper{
        @include bar-width();
        position:absolute;
        left:50%;
        height:100%;
        transform:translateX(-50%);

        &:before{
            content:'START';
            font-size:1.5rem;
            position:absolute;
            text-align:right;
            right:100%;
            top:50%;
            transform:translate(0, -50%);
        }

        &:after{
            content:'END';
            font-size:1.5rem;
            position:absolute;
            text-align:left;
            left:100%;
            top:50%;
            transform:translate(50%, -50%);
        }
    }

    #pixel-hiker {
        position: absolute;
        left: var(--done);
        height: 84px;
        transform:translate(-14px,0);

        img {
            height: 100%;
            filter: drop-shadow(0px 0px 4px $paper-bg)
                drop-shadow(0px 0px 4px $paper-bg)
                drop-shadow(0px 0px 4px $paper-bg);
        }
    }

    .squiggle-wrapper {
        position: absolute;
        @include bar-width();
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-20px);

        &:not(.dark) {
            .circle {
                @include squiggle($light-orange);
            }
            .circle2 {
                /* Offset to make squigglies line up */
                top: 20px;
                left: 15px;
                background-position: 0px -20px;
            }
        }
        &.dark {
            top: calc(50% + 4px);
            left: calc(50% + 4px);
            .circle {
                @include squiggle($dark-orange);
            }
            .circle2 {
                /* Offset to make squigglies line up */
                top: 20px;
                left: 15px;
                background-position: 0px -20px;
            }
        }
    }
</style>
