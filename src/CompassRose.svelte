<script>
</script>

<div class="compass-rose">
    <div class="img" style="background-image:url(img/compass_rose.gif);">
        <span class="N">N</span>
        <span class="E">E</span>
        <span class="S">S</span>
        <span class="W">W</span>
    </div>
</div>

<style lang="scss">
    @import './colors.scss';
    .compass-rose {
        position: absolute;
        top: 0.5rem;
        right: .5rem;
        width: 128px;
        height: 128px;
        rotate: 130deg;
        z-index:2;
        transition: .25s all;

        @media(max-width:1024px){
            width:64px;
            height:64px;

            &:hover{
                width:128px;
                height:128px;
            }
        }

        @media(min-width: 1536px){
            right: calc(50vw - 768px);
        }

        .img {
            position:relative;
            width: 100%;
            height: 100%;
            background-size:100% 100%;
            filter:drop-shadow(1px 1px 1px $light-green);
        }
        span {
            position: absolute;
            font-family: Atlantis;
            font-size: 1.8rem;
            text-shadow: 1px 1px 1px white;

            &.N{
                bottom:100%;
                left:50%;
                transform: translate(-25%,0%) rotate(-130deg);

            }
            &.E{
                left:100%;
                top:50%;
                transform:translate(0%,-50%) rotate(-130deg);

            }
            &.S{
                top:100%;
                left:50%;
                transform:translate(-50%,-25%) rotate(-130deg);
            }
            &.W{
                right:100%;
                top:50%;
                transform:translate(-50%,-50%) rotate(-130deg);

            }
            
        }
    }
</style>
