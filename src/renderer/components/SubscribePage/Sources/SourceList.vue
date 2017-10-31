<template>
  <b-container>
    <b-row>
      <b-col> 
        <source-card v-for="source in sources" :key="source.id" :sourceInfo="source"></source-card>
      </b-col>
    </b-row>
  </b-container>

  


</template>

<script>
import SourceCard from './SourceCard'

export default {
  name: 'source-list',
  components: { SourceCard },
  props: ['sources']
}
</script>