<script>
	import Map from './Map.svelte'
	import NavBar from './NavBar.svelte';
	import updates from "./trailUpdates";

	const TOTALMILES = 260

	const CURRENTMILES = parseInt(updates.updates[updates.updates.length-1].miles_to_date)
</script>

<NavBar TOTALMILES={TOTALMILES} CURRENTMILES={CURRENTMILES}/>
<div class="container" >
	<div class="map" >
		<Map TOTALMILES={TOTALMILES}/>
	</div>
</div>

<style>
.container{
	margin-top:84px;
}


</style>
