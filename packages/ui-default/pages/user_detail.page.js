import Clipboard from 'clipboard';
import $ from 'jquery';
import Notification from 'vj/components/notification';
import { NamedPage } from 'vj/misc/Page';
import base64 from 'vj/utils/base64';
import i18n from 'vj/utils/i18n';
import substitute from 'vj/utils/substitute';

const page = new NamedPage('user_detail', () => {
  $('[data-copy]').get().forEach((el) => {
    const data = $(el).attr('data-copy');
    const decoded = base64.decode(data);
    const clip = new Clipboard(el, { text: () => decoded });
    clip.on('success', () => {
      Notification.success(substitute(i18n('"{data}" copied to clipboard!'), { data: decoded }), 2000);
    });
    clip.on('error', () => {
      Notification.error(substitute(i18n('Copy "{data}" failed :('), { data: decoded }));
    });
  });
});

export default page;
