<template>
    <div id="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="product in products" :key="product.name">
                <span>{{product.name}}</span>
                <span>£{{product.price}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>