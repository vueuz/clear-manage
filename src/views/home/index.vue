<template>
  <div class="container">


    <a-card class="card-box" title="a-button & a-space & a-divider & a-popover" :style="{ width: '540px' }" hoverable
      :bordered="false">
      <a-space>
        <a-popover :title="'new title'" position="top" trigger="hover">
          <a-button type="primary">click</a-button>
          <template #content>
            this is a popover
          </template>
        </a-popover>
        <a-button type="secondary" @click="() => { }">secondary</a-button>
        <a-button type="text" @click="() => { }">text</a-button>
        <a-button type="outline" @click="() => { }">outline</a-button>
        <a-button type="dashed" @click="() => { }">dashed</a-button>
        <a-divider direction="vertical" />
        <a-link href="https://arco.design">link</a-link>
      </a-space>
    </a-card>



    <a-card class="card-box" title="a-badge & a-avatar" hoverable :bordered="false" :style="{ width: '200px' }">
      <div>
        <a-space>
          <a-badge :count="5">
            <a-avatar src="https://joeschmoe.io/api/v1/random">test</a-avatar>
          </a-badge>
          <a-avatar src="https://joeschmoe.io/api/v1/random">haha</a-avatar>
        </a-space>
      </div>
    </a-card>

    <a-card title="a-tag & a-tooltip" class="card-box" hoverable :bordered="false" >
      <a-space >
        <a-tooltip v-for="t in collapseItems" :key="t.key" :content="t.content" >
          <a-tag color="orange" >{{ t.title }}</a-tag>
        </a-tooltip>
      </a-space>
    </a-card>

    <a-card title="a-empty" class="card-box" hoverable :bordered="false">
      <a-empty />
    </a-card>

    <a-card title="a-tabs" class="card-box" hoverable :bordered="false" :style="{ width: '300px' }">
      <a-tabs v-model="active" type="line" animation>
        <a-tab-pane v-for="t in collapseItems" :key="t.key" :title="t.title">{{ t.content }}</a-tab-pane>
      </a-tabs>
    </a-card>

    <a-card title="a-card" class="card-box" hoverable :bordered="false">
    <a-space size="large">

      <a-statistic :title="'AliPay Account'" :value="2054390" animation />
      <a-statistic title="PayPal Account" :value="890432.65" animation />
    </a-space>
    </a-card>

    <a-card class="card-box" title="collapse" hoverable :bordered="false" :style="{ width: '500px' }">
      <div>
        <a-collapse :default-active-key="activeKey" destroy-on-hide>
          <a-collapse-item v-for="item in collapseItems" :key="item.key" :header="item.title">
            {{ item.content }}
          </a-collapse-item>
        </a-collapse>
      </div>
    </a-card>

    <a-card title="a-description" class="card-box" hoverable :bordered="false">
      <a-descriptions :column="1" :data="descriptionList"></a-descriptions>
    </a-card>

    <a-card title="a-list" class="card-box" hoverable :bordered="false">

      <a-list size="small">
        <a-list-item v-for="item in commentList" :key="item.author">{{ item.content }}</a-list-item>
      </a-list>
    </a-card>



    <!-- <a-card class="card-box" title="a-calendar" hoverable :bordered="false" :style="{ width: '800px' }">
        <a-calendar :value="dayjs('2021-04-03')" />
      </a-card> -->

    <a-card title="a-timeline" class="card-box" hoverable :bordered="false">
      <a-timeline label-position="relative">
        <a-timeline-item v-for="dot in commentList" :key="dot.datetime" :label="dot.datetime">
          <h3>{{ dot.author }}</h3>
          {{ dot.content }}
        </a-timeline-item>
      </a-timeline>
    </a-card>



    <a-card class="card-box" title="a-comment" hoverable :bordered="false" :style="{ width: '500px' }">
      <div>
        <a-comment author="Han Solo" datetime="2021-04-03" content="lorem ipsum dolor sit amet" />

        <a-comment v-for="(comment, index) in commentList" :key="index" :author="comment.author"
          :datetime="comment.datetime" :content="comment.content" />
      </div>
    </a-card>

    <a-card title="a-carousel" class="card-box" hoverable :bordered="false">
      <div>
        <a-carousel :style="{ width: '600px', height: '240px' }" :autoplay="true" :dots="true">
          <a-carousel-item v-for="img in images" :key="img">
            <img :src="img" :style="{ width: '100%' }" />
          </a-carousel-item>
        </a-carousel>
      </div>
    </a-card>


    <a-card title="a-img" class="card-box" hoverable :bordered="false">
      <a-image :src="images[2]" height="240px" />
    </a-card>

    <a-card title="a-table" class="card-box" hoverable :bordered="false" :style="{ width: '600px' }">
      <a-table :columns="columns" :data="commentList" table-layout-fixed />

    </a-card>

    <a-card title="a-tree" class="card-box" hoverable :bordered="false">
      <a-tree
        :data="treeData"
        :default-expanded-keys="expandedKeys"
        :default-selected-keys="selectedKeys"
        block-node
      />
    </a-card>

    <a-card title="a-form & a-input & a-select & autocomplete" class="card-box" hoverable :bordered="false" >
      <a-form
        :model="form"
        @submit="handleSubmit"
      >
        <a-form-item field="avatar" label="Avatar" >
          <a-upload action="/" :auto-upload="false" @change="onChange" @progress="onProgress" :file-list="fileList">
            <template #upload-button>
              <a-avatar :src="form.avatar" @click=""></a-avatar>
            </template>
          </a-upload>
        </a-form-item>

        <a-form-item field="name" label="Name">
          <a-input v-model="form.name" placeholder="please enter your name..." allow-clear />
        </a-form-item>

        <a-form-item field="password" label="Password" >

          <a-input-password v-model="form.password" placeholder="Please enter your password ..." allow-clear />
        </a-form-item>

        <a-form-item field="address" label="Address" >
          <a-auto-complete v-model="form.address" :data="addressList" @search="" allow-input placeholder="Please enter your address" />
        </a-form-item>

        <a-form-item field="sex" label="Sex" >
          <!-- <a-radio v-model="form.sex" value="0">Female</a-radio>
          <a-radio v-model="form.sex" value="1">Male</a-radio> -->
          <a-radio-group v-model="form.sex" :options="sexOption" />
        </a-form-item>

        <a-form-item field="age" label="Age" >
          <a-input-number v-model="form.age" :min="0" :max="100"/>
        </a-form-item>

        <a-form-item field="description" label="Description" >
          <a-textarea v-model="form.description" show-word-limit />
        </a-form-item>

        <a-form-item field="type" label="Type" >
          <a-select v-model="form.type" >
            <a-option v-for="item in addressList" :key="item" :value="item">{{ item }}</a-option>
          </a-select>
        </a-form-item>
        <a-form-item field="birthday" label="Birthday" >
          <a-date-picker v-model="form.birthday"  />
        </a-form-item>

        <a-form-item field="time" label="Time" >
          <a-time-picker v-model="form.time" type="time-range" />
        </a-form-item>



        <a-form-item field="enableNotification" label="Enable Notification" >
          <a-checkbox v-model="form.enableNotification"> Enable </a-checkbox>
        </a-form-item>
      </a-form>

    </a-card>





  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const activeKey = ref<string[]>([])
const active = ref(0)
const handleTabChange = (key: string) => {
  active.value = Number(key)
}

const sexOption = [
  {
    label: 'Female',
    value: 0
  },
  {
    label: 'Male',
    value: 1
  }
]

const onChange = (_: any, file: any) => {
  console.log(file)
}

const form = ref({
  name: '',
  password: '',
  isRead: false,
  address: '',
  sex: 0,
  age: 0,
  description: '',
  type: 0,
  birthday: '',
  time: '',
  enableNotification: false,
  code: '123',
  avatar: '',
})

const handleSubmit = ({ values }: any) => {
  console.log(values)
}

const handleFinish = (values: any) => {
  console.log(values)
}

const addressList: string[] =  ['Beijing', 'Shanghai', 'Chengdu', 'WuHan']

const addressOption = [
  {
    label: 'Beijing',
    value: 'Beijing'
  },
  {
    label: 'Shanghai',
    value: 'Shanghai'
  },
  {
    label: 'Chengdu',
    value: 'Chengdu'
  },
  {
    label: 'WuHan',
    value: 'WuHan'
  }
]

const handleSelect = (key: string) => {
  activeKey.value.push(key)
}
interface CollapseItem {
  key: string
  title: string
  content: string
}
const expandedKeys = ref([])
const selectedKeys = ref([])
const collapseItems: CollapseItem[] = [
  {
    key: '1',
    title: 'title1',
    content: 'lorem ipsum dolor sit amet'
  },
  {
    key: '2',
    title: 'title2',
    content: 'the fox jumped over the lazy dog'
  },
  {
    key: '3',
    title: 'title3',
    content: 'unknown unknown unknown'
  }
]

interface CommentItem {
  author: string
  datetime: string
  content: string
}

const commentList: CommentItem[] = [
  {

    author: 'Han Solo',
    datetime: '2021-04-03',
    content: 'content1'
  },
  {
    author: 'Mario',
    datetime: '2021-04-13',
    content: 'The fox jumped over the lazy dog'
  },
  {
    author: 'Han Solo',
    datetime: '2021-04-03',
    content: 'lorem ipsum dolor sit amet'
  }
]

const treeData = [
    {
      title: 'Trunk 0-0',
      key: '0-0',
      children: [
        {
          title: 'Branch 0-0-0',
          key: '0-0-0',
          children: [
            {
              title: 'Leaf',
              key: '0-0-0-0',
            },
            {
              title: 'Leaf',
              key: '0-0-0-1',
            }
          ]
        },
        {
          title: 'Branch 0-0-1',
          key: '0-0-1',
          children: [
            {
              title: 'Leaf',
              key: '0-0-1-0',
            },
          ]
        },
      ],
    },
  ];

const columns = [
  {
    width: 100,
    title: 'Author',
    dataIndex: 'author',
    span: 3
  },
  {
    width: 150,
    title: 'Datetime',
    dataIndex: 'datetime',
    span: 2
  },
  {
    // width:
    title: 'Content',
    dataIndex: 'content',
    span: 3
  }
]

const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];


const descriptionList = [{
  label: 'Name',
  value: 'Socrates',
  span: 3,
}, {
  label: 'Mobile',
  value: '123-1234-1234',
}, {
  label: 'Residence',
  value: 'Beijing'
}, {
  label: 'Hometown',
  value: 'Beijing',
}, {
  label: 'Address',
  value: 'Yingdu Building, Zhichun Road, Beijing'
}];
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
  background-color: #e2deec;
  background-image:
    radial-gradient(at 47% 33%, hsl(258, 46%, 90%) 0, transparent 59%),
    radial-gradient(at 82% 65%, hsl(322, 48%, 91%) 0, transparent 55%);
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // align-content: ;
  flex-direction: column-reverse
}

.card-box {
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  backdrop-filter: blur(11px) saturate(180%);
  -webkit-backdrop-filter: blur(11px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.51);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
