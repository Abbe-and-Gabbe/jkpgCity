<script>
    import Hamburger from './Hamburger.svelte';
</script>

<nav class="navbar">
    <a href="/" class="logo">LOGO</a>
    <input type="checkbox" id="toggler">
    <Hamburger />
    <div class="menu">
        <ul class="list">
            <li><a href="/">ggg</a></li>
            <li><a href="/">ggg</a></li>
            <li><a href="/">ggg</a></li>
        </ul>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        background-color: black;
        padding: 15px;
    }

    .navbar a{
        text-decoration: none;
        color: white;
    }

    .logo{
        margin-right: 50px;
    }

    .list{
        list-style: none;
        display: flex;
        gap: 25px;
        color: blanchedalmond;
    }

    #toggler, .navbar label{
        display: none;
    }

    @media screen and (max-width: 600px){
        .menu{
            width: 100%;
            max-height: 0;
            overflow: hidden;
        }

        .list{
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        .navbar label{
            display: inline-flex;
            align-items: center;
            cursor: pointer;
        }

        #toggler:checked ~ .menu {
            max-height: 100%;
        }
    }
</style>