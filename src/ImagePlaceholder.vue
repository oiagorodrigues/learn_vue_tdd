<template>
    <img :src="url"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {
    @Prop({required: true}) readonly width!: number
    @Prop() readonly height!: number
    @Prop({default: 'random'}) readonly category!: string

    get url(): string {
        const height = this.height || this.width
        return `https://loremflickr.com/${this.width}/${height}/${this.category}`;
    }
}
</script>