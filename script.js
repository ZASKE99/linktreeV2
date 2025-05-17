document.addEventListener('DOMContentLoaded', () => {
            // Verifica el modo guardado en localStorage
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
                document.querySelector('.theme-toggle').textContent = '☀️';
            } else {
                document.body.classList.remove('dark-mode');
                document.querySelector('.theme-toggle').textContent = '🌙';
            }
        });
        
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            document.querySelector('.theme-toggle').textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
        
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });