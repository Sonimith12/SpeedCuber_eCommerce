<template>
    <p class="red_text">Rubik's Cube 2 * 2</p>
    <div class="product-wrapper">
        <div class="product-image">
            <img src="https://www.nda-toys.com/images/wholesale/rubix-cube-set-wholesale-52513.jpg" class="image">
        </div>
        <div class="product-detail">
            <div class="product-title">
                <div>GAN 360 Magnet</div>
                <div>$50</div>
            </div>
            <div class="product-color">
                <div>Color</div>
                <select id="dropdown" onchange="selectOption()">
                    <option value="">White</option>
                    <option value="">Black</option>
                 </select>
            </div>
            <div class="product-quantity">
                <div>Quantity</div>
                <select id="dropdown" onchange="selectOption()">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                 </select>
            </div>
            <div class="product-addition">
                <div>Additional Items</div>
                <div class="image-one">
                    <img src="https://m.media-amazon.com/images/I/619MViPYjYL.jpg" alt="">
                </div>
                <div class="image-two"></div>
                <div class="image-three"></div>
            </div>
        </div>
    </div>
</template>
<script>
    let output = document.getElementById('output');
    function selectOption() {
        let dropdown = document.getElementById('dropdown');
        // get the index of the selected option
        let selectedIndex = dropdown.selectedIndex;
        // get a selected option and text value using the text property
        let selectedValue = dropdown.options[selectedIndex].text;
        output.innerHTML = "The selected value is " + selectedValue;
    }
</script>
<style>
.red_text {
    margin-top: 20px;
    margin-left: 60px;
    font-size: 30px;
    margin-bottom: 20px;
  }
.image {
    width: 100%;
    height: 100%;
}

.product-image {
    border-color: black;   
    border-width: 2px;
    height: 350px;
    width: 600px;
}

.image-one {
    width: 150px;
    height: 100px;
}
.image-two {
    width: 150px;
    height: 100px;
}
.image-three {
    width: 150px;
    height: 100px;
}

.product-wrapper {
    display: flex;
}

.product-detail {
    flex-wrap: wrap;
    border-color: black;
    border-width: 2px;
}

.product-title {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
}
.product-color {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
}
.product-quantity {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
}
#dropdown {
    border-width: 2px;
    border-radius: 5px;
}

</style>
