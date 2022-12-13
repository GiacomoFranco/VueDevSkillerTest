<template>
    <div class="list-group">
        <div class="list-group-item active">Active note example</div>
        <div class="list-group-item">Inactive note example</div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: false
        },
        selected: {
            type: Object,
            required: false
        }
    },
    methods: {
        onSelect() {
            // TO-DO: Implement click on a note handler
        }
    }
}
</script>