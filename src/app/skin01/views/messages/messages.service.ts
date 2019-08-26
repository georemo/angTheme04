import { Injectable } from '@angular/core';
import { ServerService } from '../../../services/server.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  token;
  componentData;
  msgData;
  senderAvatarLg;
  senderAvatarSm;
  msg = {
    doc_date: '',
    from: '',
    to: '',
    subject: '',
    msg_content: `<p></p>`
  };
  constructor(
    private svServer: ServerService
  ) {

  }

  getContent(d) {
    this.componentData = d;
    console.log('d>>');
    console.log(d);
    if (d['componentData']) {
      console.log('...1');
      this.msgData = d.componentData.data.conversation;
      this.token = d.token;
    }
    else {
      console.log('...2');
      this.msgData = [];
    }

    const html = `<div class="row">
                        <div class="col-sm-12">
                            <!-- start: TABBABLE -->
                            <div class="tabbable">
                                <!-- start: class="nav nav-tabs tab-padding tab-space-3 tab-blue" -->
                                <ul class="nav nav-tabs tab-padding tab-space-3 tab-blue" id="myTab4">
                                    <li class="active">
                                        <a data-toggle="tab" href="pages_user_profile.html#panel_overview">
                                            InBox
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="pages_user_profile.html#panel_edit_account">
                                            Sent
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="pages_user_profile.html#panel_projects">
                                            Compose
                                        </a>
                                    </li>
                                </ul>
                                <!-- end: class="nav nav-tabs tab-padding tab-space-3 tab-blue" -->
                                <!-- start: class="tab-content" -->
                                <div class="tab-content">
                                    <!-- start: id="panel_overview" -->
                                    <div id="panel_overview" class="tab-pane fade in active">
                                        <!-- start: tab0 class="row" -->
                                        ${this.getInBox()}
                                        <!-- end: tab0 class="row" -->
                                    </div>
                                    <!-- end: id="panel_overview" -->
                                    <!-- start: id="panel_edit_account" -->
                                    <div id="panel_edit_account" class="tab-pane fade">
                                        ${this.getSent()}
                                    </div>
                                    <!-- end: id="panel_edit_account" -->
                                    <!-- start: id="panel_projects" -->
                                    <div id="panel_projects" class="tab-pane fade">
                                        ${this.getCompose()}
                                    </div>
                                    <!-- end: id="panel_projects" -->
                                </div>
                                <!-- end: class="tab-content" -->
                            </div>
                            <!-- end: TABBABLE -->
                        </div>
                    </div>
                    <!-- end: PAGE CONTENT-->
    
                    `;
    return html;
  }

  getInBox() {
    console.log('starting getInBox()');
    const html = `<div class="row">
                        <div class="col-md-12">
                          <!-- start: INBOX PANEL -->
                          <div class="panel panel-white">
                            <div class="panel-heading">
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

  getSent() {
    console.log('starting getSent()');
    const html = `<div class="row">
                        <div class="col-md-12">
                          <!-- start: INBOX PANEL -->
                          <div class="panel panel-white">
                            <div class="panel-heading">
                            
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
                                ${this.getSentList(this.msgData)}
                              </ul>
                              ${this.msgContainer()}
                            </div>
                          </div>
                          <!-- end: INBOX PANEL -->
                        </div>
                      </div>`;
    return html;
  }

  getCompose() {
    console.log('starting getCompose()');
    const html = `   <div class="row">
                            <div class="col-md-12">
                                <div class="panel panel-white">
    
    
                                <div class="panel-heading">
    
                                <div class="space12">
                                <div class="btn-group btn-group-xs">
                                  <a  id="btn_send_memo" class="btn btn-green active" href="javascript:;">
                                    Send
                                  </a>
                                  <a class="btn btn-green" href="javascript:;">
                                    Draft
                                  </a>
                                  <a class="btn btn-green" href="javascript:;">
                                    Help
                                  </a>
                                  <a class="btn btn-green" href="javascript:;">
                                    Contacts
                                  </a>
                                </div>
                              </div>
    
    
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
                      
                                    ${this.ddlMuliSelect()}
                                    <div class="form-group">
                                        <label class="control-label">
                                            To
                                        </label>
                                        <span class="input-icon">
                                            <input id="txtRecepient" class="form-control" type="text" placeholder="recepient">
                                            <i class="fa fa-user"></i> </span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            Subject
                                        </label>
                                        <span class="input-icon">
                                            <input id="txtSubject" class="form-control" type="text" placeholder="...">
                                            <i class="fa fa-list"></i> </span>
                                    </div>
                                    <div class="form-group">
                                        <div class="noteWrap">
                                            <div class="form-group">
                                                <textarea id="txtMsg" class="summernote" placeholder="Write note here..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          `;
    return html;
  }

  getMessageList(msgData) {
    console.log('starting getMessageList()');
    let html = '';
    msgData.forEach((msg) => {
      html += this.getMessage(msg);
    });
    return html;
  }

  getSentList(sentData) {
    console.log('starting getSentList()');
    let html = '';
    sentData.forEach((msg) => {
      // html += this.getMessage(msg);
    });
    return html;
  }

  getMessage(msg) {
    console.log('starting setMessage');
    // console.log(msg);
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

  // assets/plugins/select2/select2.css
  // assets/plugins/select2/select2.min.js
  ddlMuliSelect() {
    const html = `<div class="form-group">
      <label for="form-field-select-4">
        Dropdown Multiple Select
      </label>
      <div class="select2-container select2-container-multi form-control search-select" id="s2id_form-field-select-4"><ul class="select2-choices">  <li class="select2-search-field">    <label for="s2id_autogen2" class="select2-offscreen">
        Dropdown Multiple Select
      </label>    <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen2" style="width: 518px;" placeholder="" aria-activedescendant="select2-result-label-185">  </li></ul></div><select multiple="multiple" id="form-field-select-4" class="form-control search-select select2-offscreen" tabindex="-1">
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </div>`;
    return html;
  }

  async sendMemo(data) {
    console.log('starting sendMemo()');
    console.log(data);
    const token = this.token;
    const jCmd = {
      "ctx": "Sys",
      "m": "Comm",
      "c": "MemoController",
      "a": "sendComm",
      "dat": {
        "fields": null,
        "f_vals": [
          {
            "data": {
              "memo_message": data.msg,
              "memo_type_id": 4
            },
            "docproc": {
              "subject": data.subject
            },
            "commconversationsub": data.subscribers

          }
        ],
        "token": this.token
      },
      "args": null
    };

    this.svServer.proc(jCmd).subscribe(async (res) => {
      console.log(res);
    });
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

    // function to initiate summernote
    const runSummerNote = function () {
      $('.summernote').each(function () {
        var _thisNote = $(this);
        $(this).summernote({
          height: 300,
          tabsize: 2,
          oninit: function () {
            if (_thisNote.code() == "" || _thisNote.code().replace(/(<([^>]+)>)/ig, "") == "") {
              _thisNote.code(_thisNote.attr("placeholder"));
            }
          },
          onfocus: function (e) {
            if (_thisNote.code() == _thisNote.attr("placeholder")) {
              _thisNote.code("");
            }
          },
          onblur: function (e) {
            if (_thisNote.code() == "" || _thisNote.code().replace(/(<([^>]+)>)/ig, "") == "") {
              _thisNote.code(_thisNote.attr("placeholder"));
            }
          }
        });
      });
    };
    runSummerNote();
    // end summernote

    // function to initiate Select2
    const runSelect2 = function () {
      $('.search-select').select2({
        placeholder: 'Select a State',
        allowClear: false
      });
    };
    runSelect2();

    // send memo
    // const btnSendMemo = document.getElementById('btn_send_memo');
    // btnSendMemo.addEventListener('click', () => {
    //   //this.sendMemo(data);
    // });
    $('#btn_send_memo').click(() => {
      console.log('btn send memo is clicked');
      console.log($('#txtRecepient').val());
      console.log($('#txtSubject').val());
      console.log($('#txtMsg').text());
      //this.sendMemo([]);
    });
  }
}