<template>
<div role="tablist">
  <b-card no-body v-for="item in items" class="mb-1" v-bind:key="item.id">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button v-b-toggle="'item-' + item.id" variant="info">{{ item.heading }}</b-button>
    </b-card-header>
    <b-collapse :id="'item-' + item.id" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{item.body}}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        id: 1,
        heading: 'Collapsible Group Item #1',
        body: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      },
      {
        id: 2,
        heading: 'Collapsible Group Item #2',
        body: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      },
      {
        id: 3,
        heading: 'Collapsible Group Item #3',
        body: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      }
      ],
      show: false
    }
  }
}
</script>
