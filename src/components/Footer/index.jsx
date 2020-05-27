import React from 'react'
import {DefaultFooter} from '@ant-design/pro-layout'

import csdn from '../../assets/social/csdn.svg'
import douBan from '../../assets/social/dou-ban.svg'
import facebook from '../../assets/social/facebook.svg'
import gitee from '../../assets/social/gitee.svg'
import github from '../../assets/social/github.svg'
import gmail from '../../assets/social/gmail.svg'
import infoq from '../../assets/social/infoq.svg'
import jianShu from '../../assets/social/jian-shu.svg'
import jueJin from '../../assets/social/jue-jin.svg'
import link from '../../assets/social/link.svg'
import osChina from '../../assets/social/os-china.svg'
import segmentFault from '../../assets/social/segment-fault.svg'
import stackOverflow from '../../assets/social/stack-overflow.svg'
import touTiao from '../../assets/social/tou-tiao.svg'
import twitter from '../../assets/social/twitter.svg'
import xiMaLaYa from '../../assets/social/xi-ma-la-ya.svg'
import zhiHu from '../../assets/social/zhi-hu.svg'

import './index.less'

/*
> * **作者**：March
> * **邮箱**：fengqi.mao.march@gmail.com
> * **码云**：https://gitee.com/maofengqi
> * **知乎**：http://zhihu.com/people/maofengqi
> * **头条**：https://toutiao.io/u/425956/subjects
> * **简书**：https://www.jianshu.com/u/02f2491c607d
> * **掘金**：https://juejin.im/user/5b484473e51d45199940e2ae
> * **豆瓣**：https://www.douban.com/people/maofengqi/
> * **CSDN**：http://blog.csdn.net/u011810138
> * **InfoQ**: https://www.infoq.cn/profile/1625261
> * **Github**：https://github.com/maoqiqi
> * **开源中国**：https://my.oschina.net/maoqiqi
> * **Twitter**：https://twitter.com/maofengqi
> * **Facebook**：https://www.facebook.com/fengqi.mao
> * **喜马拉雅听书**：https://www.ximalaya.com/zhubo/31419312/
> * **SegmentFault**：https://segmentfault.com/u/maoqiqi
> * **StackOverFlow**：https://stackoverflow.com/users/8223522
>
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

const footer = {
  links: [
    {
      key: 'CSDN',
      title: <img alt='CSDN' src={csdn} />,
      href: 'http://blog.csdn.net/u011810138',
      blankTarget: true,
    },
    {
      key: '豆瓣',
      title: <img alt='豆瓣' src={douBan} />,
      href: 'https://www.douban.com/people/maofengqi/',
      blankTarget: true,
    },
    {
      key: 'Facebook',
      title: <img alt='Facebook' src={facebook} />,
      href: 'https://www.facebook.com/fengqi.mao',
      blankTarget: true,
    },
    {
      key: '码云',
      title: <img alt='码云' src={gitee} />,
      href: 'https://gitee.com/maofengqi',
      blankTarget: true,
    },
    {
      key: 'Github',
      title: <img alt='Github' src={github} />,
      href: 'https://github.com/maoqiqi',
      blankTarget: true,
    },
    {
      key: 'Gmail',
      title: <img alt='Gmail' src={gmail} />,
      href: 'mailto:fengqi.mao.march@gmail.com',
      blankTarget: true,
    },
    {
      key: 'InfoQ',
      title: <img alt='InfoQ' src={infoq} />,
      href: 'https://www.infoq.cn/profile/1625261',
      blankTarget: true,
    },
    {
      key: '简书',
      title: <img alt='简书' src={jianShu} />,
      href: 'https://www.jianshu.com/u/02f2491c607d',
      blankTarget: true,
    },
    {
      key: '掘金',
      title: <img alt='掘金' src={jueJin} />,
      href: 'https://juejin.im/user/5b484473e51d45199940e2ae',
      blankTarget: true,
    },
    {
      key: 'link',
      title: <img alt='link' src={link} />,
      href: 'https://leo.com',
      blankTarget: true,
    },
    {
      key: '开源中国',
      title: <img alt='开源中国' src={osChina} />,
      href: 'https://my.oschina.net/maoqiqi',
      blankTarget: true,
    },
    {
      key: 'SegmentFault',
      title: <img alt='SegmentFault' src={segmentFault} />,
      href: 'https://segmentfault.com/u/maoqiqi',
      blankTarget: true,
    },
    {
      key: 'StackOverFlow',
      title: <img alt='StackOverFlow' src={stackOverflow} />,
      href: 'https://stackoverflow.com/users/8223522  ',
      blankTarget: true,
    },
    {
      key: '头条',
      title: <img alt='头条' src={touTiao} />,
      href: 'https://toutiao.io/u/425956/subjects',
      blankTarget: true,
    },
    {
      key: 'Twitter',
      title: <img alt='Twitter' src={twitter} />,
      href: 'https://twitter.com/maofengqi',
      blankTarget: true,
    },
    {
      key: '喜马拉雅听书',
      title: <img alt='喜马拉雅听书' src={xiMaLaYa} />,
      href: 'https://www.ximalaya.com/zhubo/31419312/',
      blankTarget: true,
    },
    {
      key: '知乎',
      title: <img alt='知乎' src={zhiHu} />,
      href: 'http://zhihu.com/people/maofengqi',
      blankTarget: true,
    },
  ],
  copyright: '2020 React 入门学习 Create by March',
}

export default () => <DefaultFooter {...footer} />
