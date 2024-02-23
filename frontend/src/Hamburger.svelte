<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<label for="toggler" class="hamburger" on:click={toggleMenu}>
    <i class="ri-menu-line"></i>
</label>

<style>
    .hamburger {
        display: none;
        cursor: pointer;
        color: white;
    }

    @media screen and (max-width: 600px) {
        .hamburger {
            display: inline-flex;
            align-items: center;
            color: white;
        }
    }
</style>
