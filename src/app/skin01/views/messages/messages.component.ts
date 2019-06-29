import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  componentData;
  msgData;
  senderAvatarLg;
  senderAvatarSm;
  msg = {
    doc_date: '11 NOV 2014, 11:46 PM',
    from: 'Nicole Bell &lt;nicole@example.com&gt;',
    to: 'Peter Clark',
    subject: 'New frontend layout',
    msg_content: `<p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
                Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
              </p>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit ligula. In accumsan mauris at augue feugiat consequat. Aenean consequat sem sed velit sagittis dignissim. Phasellus quis convallis est. Praesent porttitor mauris nec lectus mollis, eget sodales libero venenatis. Cras eget vestibulum turpis. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam turpis velit, tempor vitae libero ac, fermentum laoreet dolor.
              </p>`
  };
  constructor(
  ) {

  }

  ngOnInit() {
    $(document).ready(() => {
      $('body').find('.messages-item').click((e) => {
        console.log('message-item is clicked');
        console.log('id=' + $(this)['id']);
      })
    });
  }

  getContent(d) {
    this.componentData = d;
    console.log('d>>');
    console.log(d);
    if (d['componentData']) {
      this.msgData = d['componentData']['data']['conversation'];
    }
    else {
      this.msgData = [];
    }

    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: INBOX PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Inbox</h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="pages_messages.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="pages_messages.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="pages_messages.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="pages_messages.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="pages_messages.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body messages">
          <ul class="messages-list col-md-4">
            <li class="messages-search">
              <form action="pages_messages.html#" class="form-inline">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search messages...">
                  <div class="input-group-btn">
                    <button class="btn btn-green" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </li>
            ${this.getMessageList(this.msgData)}
          </ul>
          ${this.msgContainer()}
        </div>
      </div>
      <!-- end: INBOX PANEL -->
    </div>
  </div>`;
    return html;
  }

  getDemoMsgList() {
    return `<li class="messages-item">
              <span title="Mark as starred" class="messages-item-star"><i class="fa fa-star"></i></span>
              <img alt="" src="assets/images/avatar-1.jpg" class="messages-item-avatar">
              <span class="messages-item-from">Peter Clark</span>
              <div class="messages-item-time">
                <span class="text">10:23 PM</span>
                <div class="messages-item-actions">
                  <a data-toggle="dropdown" title="Reply" href="pages_messages.html#"><i class="fa fa-mail-reply"></i></a>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Move to folder" href="pages_messages.html#"><i class="fa fa-folder-open"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-pencil"></i> Mark as Read
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-ban"></i> Spam
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-trash-o"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Attach to tag" href="pages_messages.html#"><i class="fa fa-tag"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon red"></i>Important</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon blue"></i>Work</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon green"></i>Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="messages-item-subject">Lorem ipsumdolor sit amet ...</span>
              <span class="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
            </li>
            <li class="messages-item active starred">
              <span title="Remove star" class="messages-item-star"><i class="fa fa-star"></i></span>
              <img alt="" src="assets/images/avatar-2.jpg" class="messages-item-avatar">
              <span class="messages-item-from">Nicole Bell</span>
              <div class="messages-item-time">
                <span class="text">08:46 PM</span>
                <div class="messages-item-actions">
                  <a data-toggle="dropdown" title="Reply" href="pages_messages.html#"><i class="fa fa-mail-reply"></i></a>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Move to folder" href="pages_messages.html#"><i class="fa fa-folder-open"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-pencil"></i> Mark as Read
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-ban"></i> Spam
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-trash-o"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Attach to tag" href="pages_messages.html#"><i class="fa fa-tag"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon red"></i>Important</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon blue"></i>Work</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon green"></i>Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="messages-item-subject">Duis autem vel eum iriure ...</span>
              <span class="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
            </li>
            <li class="messages-item">
              <span title="Mark as starred" class="messages-item-star"><i class="fa fa-star"></i></span>
              <span class="messages-item-attachment"><i class="fa fa-paperclip"></i></span>
              <img alt="" src="assets/images/avatar-3.jpg" class="messages-item-avatar">
              <span class="messages-item-from">Steven Thompson</span>
              <div class="messages-item-time">
                <span class="text">04:03 PM</span>
                <div class="messages-item-actions">
                  <a data-toggle="dropdown" title="Reply" href="pages_messages.html#"><i class="fa fa-mail-reply"></i></a>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Move to folder" href="pages_messages.html#"><i class="fa fa-folder-open"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-pencil"></i> Mark as Read
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-ban"></i> Spam
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-trash-o"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Attach to tag" href="pages_messages.html#"><i class="fa fa-tag"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon red"></i>Important</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon blue"></i>Work</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon green"></i>Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="messages-item-subject">Lorem ipsumdolor sit amet ...</span>
              <span class="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
            </li>
            <li class="messages-item">
              <span title="Mark as starred" class="messages-item-star"><i class="fa fa-star"></i></span>
              <img alt="" src="assets/images/avatar-1.jpg" class="messages-item-avatar">
              <span class="messages-item-from">Peter Clark</span>
              <div class="messages-item-time">
                <span class="text">11:16 AM</span>
                <div class="messages-item-actions">
                  <a data-toggle="dropdown" title="Reply" href="pages_messages.html#"><i class="fa fa-mail-reply"></i></a>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Move to folder" href="pages_messages.html#"><i class="fa fa-folder-open"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-pencil"></i> Mark as Read
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-ban"></i> Spam
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-trash-o"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Attach to tag" href="pages_messages.html#"><i class="fa fa-tag"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon red"></i>Important</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon blue"></i>Work</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon green"></i>Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="messages-item-subject">Duis autem vel eum iriure ...</span>
              <span class="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
            </li>`;
  }

  getMessageList(msgData) {
    let html = '';
    msgData.forEach((msg) => {
      html += this.getMessage(msg);
    });
    return html;
  }

  getMessage(msg) {
    console.log('starting setMessage');
    console.log(msg);
    const fullName = msg['sender_fname'] + ' ' + msg['sender_lname'];
    this.setSenderAvatar(msg['sender_avatar']);
    const ret = `<li id="${msg['memo_id']}" class="messages-item">
              <span title="Mark as starred" class="messages-item-star"><i class="fa fa-star"></i></span>
              <img alt="" src="${this.senderAvatarLg}" class="messages-item-avatar">
              <span class="messages-item-from">${fullName}</span>
              <div class="messages-item-time">
                <span class="text">${msg['doc_date']}</span>
                <div class="messages-item-actions">
                  <a data-toggle="dropdown" title="Reply" href="pages_messages.html#"><i class="fa fa-mail-reply"></i></a>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Move to folder" href="pages_messages.html#"><i class="fa fa-folder-open"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-pencil"></i> Mark as Read
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-ban"></i> Spam
                        </a>
                      </li>
                      <li>
                        <a href="pages_messages.html#">
                          <i class="fa fa-trash-o"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <a data-toggle="dropdown" title="Attach to tag" href="pages_messages.html#"><i class="fa fa-tag"></i></a>
                    <ul class="dropdown-menu pull-right">
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon red"></i>Important</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon blue"></i>Work</a>
                      </li>
                      <li>
                        <a href="pages_messages.html#"><i class="tag-icon green"></i>Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="messages-item-subject">${this.setShortSubject(msg['subject'])} ...</span>
              <span class="messages-item-preview">${this.setShortBody(msg['memo_message'])} ...</span>
            </li>`;
    this.clearSenderAvatar(); // if not done can be sustained and used in next data
    return ret;
  }

  setShortSubject(subject) {
    return subject.substr(0, 25);
  }

  setShortBody(memo_message) {
    return memo_message.substr(0, 75);
  }

  setSenderAvatar(strImg) {
    console.log('starting setSenderAvatar(strImg)');
    console.log('strImg>>');
    console.log(strImg);

    try {
      const jImg = JSON.parse(strImg);
      this.senderAvatarLg = jImg['large'];
      this.senderAvatarSm = jImg['small'];
    }
    catch (e) {
      console.log(e);
    }
  }

  clearSenderAvatar() {
    this.senderAvatarLg = null;
    this.senderAvatarSm = null;
  }

  msgContainer() {
    const ret = `<!-- start: MESSAGE CONTINER -->
    <div id="msg_container" class="messages-content col-md-8">
      
    </div>
    <!-- end: MESSAGE CONTINER -->`;
    return ret;
  }

  msgContent() {
    const ret = `<div class="message-header">
                  <div class="message-time">
                    ${this.msg.doc_date}
                  </div>
                  <div class="message-from">
                  ${this.msg.from}
                  </div>
                  <div class="message-to">
                    To: ${this.msg.to}
                  </div>
                  <div class="message-subject">
                  ${this.msg.subject}
                  </div>
                  <div class="message-actions">
                    <a title="Move to trash" href="pages_messages.html#"><i class="fa fa-trash-o"></i></a>
                    <a title="Reply" href="pages_messages.html#"><i class="fa fa-reply"></i></a>
                    <a title="Reply to all" href="pages_messages.html#"><i class="fa fa-reply-all"></i></a>
                    <a title="Forward" href="pages_messages.html#"><i class="fa fa-long-arrow-right"></i></a>
                  </div>
                </div>
                <div class="message-content">
                ${this.msg.msg_content}
                </div>`;
    return ret;
  }

  /*
  initial html is invoked from the desktop component.
  Once the html is ready for this component, isReady() is invoked.
  */
  isReady() {
    const msgElement = document.getElementsByClassName('messages-item');
    for (let i = 0; i < msgElement.length; i++) {
      ((index) => {
        msgElement[index].addEventListener('click', () => {
          console.log('Clicked index: ' + index);
          let id = msgElement[index].getAttribute('id');
          console.log('id=' + id);
          $('.messages-item, active').removeClass('active');
          $('#' + id).addClass('active');
          const selMsg = this.msgData.filter(d => d.memo_id == id);
          console.log(selMsg);
          this.msg.doc_date = selMsg[0].doc_date;
          this.msg.from = selMsg[0].sender_fname + ' ' + selMsg[0].sender_lname;
          this.msg.msg_content = selMsg[0].memo_message;
          this.msg.subject = selMsg[0].subject;
          this.msg.to = selMsg[0].sub_fname + ' ' + selMsg[0].sub_lname;;
          console.log(this.msg);
          const msg_content = this.msgContent();
          $('#msg_container').html(msg_content);
        });
      })(i);
    }
  }

}
