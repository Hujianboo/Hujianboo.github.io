---
layout:     post
title:      Tcp源码分析---握手
subtitle:   浅谈 TCP握手
date:       2018-12-13
author:     JB
header-img: img/post-bg-universe.jpg
catalog: true
tags:
    - TCP
---

##tcp握手与挥手
![Imgur](https://i.imgur.com/Q8hsfqN.png)
##client:
**tcp_v4_connect** 
 
 tcp_set_state

tcp_ecn_send_syn

~~tcp_rcv_state_process~~（处理除建立完成和超时下的状态）

tcp_send_ack
##server:
**tcp_do_rcv**
~~tcp_v4_cookie_check~~


tcp_v4_send_synack
tcp_make_synack

```
#ifndef _LINUX_TCP_STATES_H
#define _LINUX_TCP_STATES_H

enum {
	TCP_ESTABLISHED = 1,
	TCP_SYN_SENT,
	TCP_SYN_RECV,
	TCP_FIN_WAIT1,
	TCP_FIN_WAIT2,
	TCP_TIME_WAIT,
	TCP_CLOSE,
	TCP_CLOSE_WAIT,
	TCP_LAST_ACK,
	TCP_LISTEN,
	TCP_CLOSING,	/* Now a valid state */

	TCP_MAX_STATES	/* Leave at the end! */
};

#define TCP_STATE_MASK	0xF

#define TCP_ACTION_FIN	(1 << 7)

enum {
	TCPF_ESTABLISHED = (1 << 1),
	TCPF_SYN_SENT	 = (1 << 2),
	TCPF_SYN_RECV	 = (1 << 3),
	TCPF_FIN_WAIT1	 = (1 << 4),
	TCPF_FIN_WAIT2	 = (1 << 5),
	TCPF_TIME_WAIT	 = (1 << 6),
	TCPF_CLOSE	 = (1 << 7),
	TCPF_CLOSE_WAIT	 = (1 << 8),
	TCPF_LAST_ACK	 = (1 << 9),
	TCPF_LISTEN	 = (1 << 10),
	TCPF_CLOSING	 = (1 << 11) 
};

#endif	/* _LINUX_TCP_STATES_H */
```
