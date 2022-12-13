<template>
    <form id="noteForm">
        <div class="form-group">
            <label>Title:</label>
            <input
                class="form-control"
                name="title"
            />
        </div>
        <div class="form-group">
            <label>Note:</label>
            <textarea
                class="form-control"
                name="text"
            />
        </div>
        <div class="form-group">
            <input
                type="button"
                id="cancel"
                class="btn btn-default pull-right"
                value="Cancel"
            />
            <input
                type="submit"
                class="btn btn-default pull-right"
                value="Save"
            />
        </div>
    </form>
</template>

<script>
export default {
    props: {
        note: {
            required: false,
            type: Object
        }
    },
    methods: {
        // TO-DO: Implement event handlers
        onChange() {
        },
        onSubmit() {
        },
        onCancel() {
        }
    }
}
</script>