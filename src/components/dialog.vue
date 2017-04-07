/*
<!-- template -->
<modal-dialog ref="dialog"></modal-dialog>

import modalDialog from '../../components/dialog'
components: {
  modalDialog
},
<!-- methods -->
this.$refs.dialog.confirm(this.phoneNumber || '手机号不能为空', {
  type: 'toast',
  title: '请输入正确的手机号'
  // okText: 'OK',
  // cancelText: 'NO',
  // noBtn: true,
  // noTitle: true
}).then(() => {
  // 点击确定按钮的回调处理
  callback()
}).catch(() => {
  // 点击取消按钮的回调处理
  callback()
})
 */
<template>
<div class="modal" v-show="show" transition="fade">
  <div v-if="opts.type === 'toast'" class="modal-toast">
    {{content}}
  </div>
  <div v-else>
    <div class="modal-dialog">
      <div class="modal-dialog-hd" v-if="!opts.noTitle">{{opts.title}}</div>
      <a @click="close(0)" class="close" href="javascript:void(0)"></a>
      <div class="modal-dialog-bd">{{content}}</div>
      <div class="modal-dialog-ft" v-if="!opts.noBtn">
        <slot name="button">
          <a v-if="opts.type === 'confirm'" href="javascript:void(0)" class="modal-btn" :class="opts.cancelButtonClass" @click="close(1)">{{opts.cancelText}}</a> 
          <a href="javascript:void(0)" class="modal-btn modal-btn-primary" :class="opts.okButtonClass" @click="submit">{{opts.okText}}</a>
        </slot>
      </div>
    </div>
    <div v-show="show" class="modal-maks" transition="fade"></div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'dialog',
    data () {
      return {
        show: false,  // 是否显示模态框
        content: '',  // 要显示的内容
        opts: {
          type: 'alert',  // confirm || toast
          noTitle: false,
          title: '提示',  // 标题
          nobtn: false,  // 无任何按钮
          okText: '确定', // 确定按钮文字
          cancelText: '取消',  // 取消按钮文字
          cancelButtonClass: '', // 取消按钮样式
          okButtonClass: '' // 确定按钮样式
        },
        resolve: '',
        promise: '', // 保存promise对象
        timer: null
      }
    },
    methods: {
      confirm (content, opts) {
        this.content = content
        this.opts = {...this.opts, ...opts}
        this.show = true
        // toast set
        if (this.opts.type === 'toast') {
          this.timer = setTimeout(() => {
            this.show = false
            clearTimeout(this.timer)
          }, 3000)
        }
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
        return this.promise // 返回promise对象,给父级组件调用
      },
      //  确定,将promise断定为完成态
      submit () {
        this.resolve('submit')
        this.show = false
      },
      close (type) {
        this.show = false
        this.reject(type)
      }
    }
  }
</script>

<style>
.modal-dialog{position:fixed; z-index:5000; width:80%; max-width:300px; top:50%; left:50%; transform:translate(-50%, -50%); background-color:#fff; text-align: center; border-radius:3px; overflow:hidden;}
.modal-dialog-hd{padding: 13px 16px 5px; font-size:18px; font-weight:400;}
.modal-dialog-bd{padding:0 16px 8px; min-height:40px; font-size:15px; line-height:1.3; word-wrap:break-word; word-break:break-all; color:#999;}
.modal-dialog-ft{position:relative; line-height:48px; font-size:18px; display:flex;}
.modal-dialog-ft .modal-btn{position:relative; display:block; flex:1; text-decoration:none; border:none; color:#353535;-webkit-tap-highlight-color:rgba(0,0,0,0);}
.modal-dialog-ft .modal-btn:first-child:after{display:none;}
.modal-dialog-ft .modal-btn:after{content:' '; display:block; position:absolute; left:0; top:0; width:1px; bottom:0; border-left:1px solid #D5D5D6; color:#D5D5D6;transform-origin: 0 0; transform: scaleX(0.5);}
.modal-dialog-ft:after{content:' '; display:block; position:absolute; left:0; top:0; height:1px; right:0; border-top:1px solid #D5D5D6; color:#D5D5D6;transform-origin: 0 0; transform: scaleY(0.5);}
.modal-maks{position:fixed; z-index:1000; top:0; right:0; left:0; bottom:0; background: rgba(0, 0, 0, .6);}
.modal-dialog-ft .modal-btn-primary{color:#0BB20C;}
.modal-toast{position:fixed; z-index:1000; top:50%; left:50%; max-width:300px; padding:5px 20px; color:#fff; transform:translate(-50%, -50%); background:rgba(0, 0, 0, .6); border-radius:5px;}
</style>
