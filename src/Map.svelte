<script>
    import { onMount } from "svelte";
    import { geoTransverseMercator } from "d3-geo";
    import updates from "./trailUpdates";
    import { apdate } from "journalize";

    export let TOTALMILES;

    function cssVariables(node, variables) {
        setCssVariables(node, variables);

        return {
            update(variables) {
                setCssVariables(node, variables);
            },
        };
    }
    function setCssVariables(node, variables) {
        for (const name in variables) {
            node.style.setProperty(`--${name}`, variables[name]);
        }
    }

    let w;
    let h;

    let labels = [
        [
            "Lake\nSuperior",
            [-90.9723671181851, 47.422775426021936],
            { x: 100, y: 100 },
            "water right",
        ],
        [
            "Duluth",
            [-92.12158682183562, 46.77394061610688],
            { x: 0, y: 0 },
            "city center",
        ],
        [
            "Silver Bay",
            [-91.23951935174807, 47.28011825781504],
            { x: 0, y: 0 },
            "city right",
        ],
        [
            "Two Harbors",
            [-91.64245720122472, 47.001486961532194],
            { x: 0, y: 0 },
            "city right",
        ],
        [
            "Tofte",
            [-90.81520984576878, 47.55753174331404],
            { x: 0, y: 0 },
            "city right",
        ],
        [
            "Grand Marais",
            [-90.35334601263449, 47.733470516951584],
            { x: 0, y: 0 },
            "city right",
        ],
        [
            "Minnesota",
            [-92.0497067919744, 47.52108865683481],
            { x: 0, y: 0 },
            "state right",
        ],
        [
            "Wisconsin",
            [-91.6438416420776, 46.671178157783125],
            { x: 0, y: 0 },
            "state right",
        ],
        [
            "Canada",
            [-89.86373098941874, 48.03288607250681],
            { x: 0, y: 0 },
            "country center",
        ],
        [
            "Superior\nHiking\nTrail",
            [-91.52589435664864, 47.18261550318792],
            { x: 0, y: 0 },
            "trail left",
        ],
    ];

    const bbox = {
        type: "Polygon",
        coordinates: [
            [
                [-93.06402062100331, 47.383390452738126],
                [-90.50577234759776, 48.724378875357516],
                [-89.13746283717852, 47.45341249771137],
                [-91.51889561667839, 46.18173504256259],
                [-93.06402062100331, 47.383390452738126],
            ],
        ],
    };

    const projection = geoTransverseMercator()
        .rotate([93, -47, -130])
        .fitSize([w, h], bbox);

    let projectedUpdates = updates.updates
        .map((d, i) => {
            d.date = new Date(d.date);
            d.location = d.location.map((l) => parseFloat(l));
            d.hidden = !(i === updates.updates.length - 1);

            return d;
        })
        .map((d) => {
            d.xy = {
                x: `${projection(d.location)[0]}px`,
                y: `${projection(d.location)[1]}px`,
            };
            return d;
        });

    function placeLabels() {
        projection.fitSize([w, h], bbox);

        labels.map((d) => {
            d[2] = {
                x: `${projection(d[1])[0]}px`,
                y: `${projection(d[1])[1]}px`,
            };
            return d;
        });
        labels = labels;

        projectedUpdates.map((d) => {
            d.xy = {
                x: `${projection(d.location)[0]}px`,
                y: `${projection(d.location)[1]}px`,
            };
        });
        projectedUpdates = projectedUpdates;
    }

    onMount(async () => {
        placeLabels();
    });

    const toggleUpdate = (index) => {
        // if opening an update, close the others
        if (projectedUpdates[index].hidden) {
            projectedUpdates
                .filter((d, i) => !d.hidden && i !== index)
                .map((d) => {
                    d.hidden = true;
                    return d;
                });
        }
        projectedUpdates[index].hidden = !projectedUpdates[index].hidden;

        projectedUpdates = projectedUpdates;
    };

    function slideIn(node, { duration }) {
        return {
            duration,
            css: (t) => `transform:translateY(-${(1 - t) * 100}%)`,
        };
    }

    function slideOut(node, { duration }) {
        return {
            duration,
            css: (t) => `transform:translateY(${(1 - t) * -100}%)`,
        };
    }
</script>

<svelte:window on:resize={placeLabels} />

<div id="map-frame">
    <div class="aspect" bind:clientWidth={w} bind:clientHeight={h}>
        {#each labels as label}
            <div use:cssVariables={label[2]} class={`map-label ${label[3]}`}>
                {label[0]}
            </div>
        {/each}
        {#each projectedUpdates as update, i}
        <div
            class:hidden={update.hidden}
            class="update-button"
            on:click={() => {
                toggleUpdate(i);
            }}
            use:cssVariables={update.xy}
        />
        <div
                class:hidden={update.hidden}
                class="update"
                use:cssVariables={{...update.xy,overset:`${w/3}px`}}
            >
                {#if !update.hidden}
                    <div
                        out:slideOut={{ duration: 500 }}
                        in:slideIn={{ duration: 500 }}
                        data-mileage={`${update.miles_to_date}/${TOTALMILES} miles (${Math.round(update.miles_to_date/TOTALMILES*100)}%) done  \n${update.mileage} miles today`}
                        class="update-box"
                    >
                        <p class="bold">{apdate(update.date)}</p>
                        <p>{update.text}</p>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
    <div class="update-wrapper">
        {#each projectedUpdates as update, i}
        <div
            class:hidden={update.hidden}
            class="update-button"
            on:click={() => {
                toggleUpdate(i);
            }}
            use:cssVariables={update.xy}
        />
            <div
                class:hidden={update.hidden}
                class="update"
                use:cssVariables={{...update.xy,overset:`${w/3}px`}}
            >
                {#if !update.hidden}
                    <div
                        out:slideOut={{ duration: 500 }}
                        in:slideIn={{ duration: 500 }}
                        data-mileage={`${update.miles_to_date}/${TOTALMILES} miles (${Math.round(update.miles_to_date/TOTALMILES*100)}%) done  \n${update.mileage} miles today`}
                        class="update-box"
                    >
                        <p class="bold">{apdate(update.date)}</p>
                        <p>{update.text}</p>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "node_modules/pixel-borders/src/styles/pixel-borders/pixel-borders-mixins";

    @import "./colors.scss";

    .bold {
        font-weight: bold;
    }

    #map-frame {
        position: relative;
        width: 100vw;
        height: 2048px;
        padding-bottom: 0;
        overflow-x: hidden;

        .aspect {
            position: absolute;
            display: block;
            width: 1536px;
            height: 100%;
            background-image: url("/superior-hiking-trail.gif");
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);

            @media(max-width: 480px){
                .update{
                    display:none;
                }
                .update-button:not(.hidden){
                    display: none;
                }
            }
        }


        .update-button {
            position: absolute;
            font-family: "Atlantis";
            font-size: 2rem;
            line-height: 1.25rem;
            z-index: 5;
            transform: translate(calc(var(--x) - 12px), calc(var(--y) - 12px));
            width: 32px;
            height: 32px;
            background-color: $paper-bg;
            color: $paper-contrast;
            cursor: pointer;

            &:after {
                content: "X";
                position: absolute;
                top: 0px;
                left: 6px;
                pointer-events: none;
            }

            &:hover {
                color: $paper-bg;
                background-color: $paper-contrast;
            }

            &.hidden {
                z-index: 3;
                &:after {
                    content: "■";
                    left: 5px;
                    font-size: 1.5rem;
                }
            }

            @include pixel-borders($corner-size: 2, $border-color: $paper-contrast);
        }


        .update-wrapper{
            position:absolute;
            height:2048px;
            width:100vw;
            pointer-events: none;

            *{
                pointer-events: all;
            }

            @media(min-width: 480px){
                display:none;
            }

            .update-button{
                transform:translate(0.5rem, calc(var(--y) - 0.5rem));

                &.hidden{
                    display:none;
                }
            }
        }

        .update {
            pointer-events: all;
            position: absolute;
            transform: translate(var(--x), var(--y));
            // max-width: 264px;
            font-family: "Atlantis";
            font-size: 2rem;
            line-height: 1.25rem;
            overflow-y: hidden;
            z-index: 4;

            &.hidden {
                z-index: 2;
            }

            @media(max-width:480px){
                margin: 0 1rem;
                transform: translate(0px,var(--y));
            }


        }

        .update-box {
            position: relative;
            z-index: 4;
            width: 100%;
            max-width: 240px;
            padding: 3rem 0.5rem 0.5rem;
            background-color: $paper-bg;
            color: $paper-contrast;

            @include pixel-borders($corner-size: 2, $border-color: $paper-contrast);

            @media(max-width:480px){
                max-width:calc(480px - 2rem);
                // margin:0 1rem;
            }
            p {
                margin: 0;
                margin-bottom: 0.25rem;
            }

            &:before{
                content:attr(data-mileage);
                font-size:1.5rem;
                white-space:break-spaces;
                position:absolute;
                top:0;
                left:calc(50% + 12px);
                width:calc(100% - 16px);
                transform:translateX(-50%);
                text-align:center;
            }
        }

        .map-label {
            font-family: "Atlantis";
            font-size: 3rem;
            line-height: 2rem;
            position: absolute;
            z-index: 4;
            transform: translate(var(--x), var(--y));

            &.right {
                text-align: right;
                right: 100%;
            }

            &.left {
                left: 0;
                text-align: left;
            }

            &.center {
                text-align: center;
            }

            &.water {
                color: $water;
            }

            &.city {
                color: $city;
                text-shadow: 1px 1px 1px white;
            }
            &.state {
                color: $state;
            }
            &.country {
                color: $country;
            }

            &.state,
            &.country {
                letter-spacing: 0.4rem;
            }

            &.trail {
                color: $trail;
                text-shadow: 1px 1px 1px white;
                white-space: break-spaces;
            }
        }
    }

    @media (max-width: 512px) {
        .map-label {
            white-space: break-spaces;
        }
    }
</style>
