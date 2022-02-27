<script>
  import "../app.css";
  let darkStyle = false;
  const changeStyle = () => {
    darkStyle = ! darkStyle
  }
</script>

<div class={darkStyle ? 'dark' : ''}>
  
  <div class="bg-white text-blakc dark:text-white dark:bg-black min-h-screen duration-150">
    <button class="ml-5 mt-4" on:click={changeStyle}>
      <img class="w-7 h-7" src='/static/lightbulb.svg' alt='lightbulb' />
    </button>
    <slot />
  </div>
</div>
