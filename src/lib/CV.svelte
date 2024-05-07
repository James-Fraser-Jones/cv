<script>
	import content from './content.json';
</script>

<div class="bg-slate-100 p-14 flex justify-center">
	<div class="bg-slate-50 shadow-2xl size-a4 flex flex-col gap-4 justify-between">
		<h1 class="text-brand">Hello {content.header.title}!</h1>
	</div>
</div>

<style>
	.size-a4 {
		width: 210mm;
		height: 297mm;
	}
</style>
