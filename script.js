body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f9f9f9;
    color: #333;
}

h1 {
    text-align: center;
    color: #ff6b6b;
    margin-bottom: 25px;
}

.tab-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    border-bottom: 3px solid #ff6b6b;
    padding-bottom: 5px;
}

.tab-btn {
    padding: 10px 16px;
    background: #e0e0e0;
    border: none;
    cursor: pointer;
    border-radius: 6px 6px 0 0;
    font-weight: bold;
}

.tab-btn:hover {
    background: #d0d0d0;
}

.tab-btn.active {
    background: #ff6b6b;
    color: white;
}

.recipe-content {
    display: none;
    background: white;
    padding: 20px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}

.recipe-content.active {
    display: block;
}

.recipe-content p {
    background: #f0f0f0;
    padding: 8px 12px;
    border-radius: 4px;
    display: inline-block;
}

ul, ol {
    line-height: 1.8;
}
