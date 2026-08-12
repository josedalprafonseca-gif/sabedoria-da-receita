    <script>
        function openTab(evt, recipeId) {
            var i, content, tablinks;
            content = document.getElementsByClassName("recipe-content");
            for (i = 0; i < content.length; i++) {
                content[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("tab-btn");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(recipeId).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
    </script>

</body>
</html>
