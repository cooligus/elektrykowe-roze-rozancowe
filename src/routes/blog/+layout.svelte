<script>
    import './blog.css';
</script>

<div class="w-full flex justify-center">
    <div class="blog-container mx-auto">
        <slot />
    </div>
    <a class="fixed bottom-5 right-5 bg-rose-800 px-6 py-4 rounded-xl cursor-pointer" href="/">
        Powrót
    </a>
</div>