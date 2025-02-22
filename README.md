# [首页查询更多项目](https://github.com/GraduationProject-weixin) 包安装运行


# 50276wxapp优选驾考小程序

![picture](https://raw.githubusercontent.com/GraduationProject-springboot/.github/main/img/wx.png)

### 点击播放视频 ▼
[![Watch the video](https://i.sstatic.net/Vp2cE.png)]()


# 研究背景
自计算机发展以来给人们的生活带来了改变。第一代计算机为1946年美国设计，最开始用于复杂的科学计算，占地面积、开机时间要求都非常高，经过数十几的改变计算机技术才发展到今天。现如今已是电子时代、数据时代，所有的生活都离不开计算机和网络。工作中有各类办公软件、APP，娱乐中有各类游戏软件、视频软件等都为生活带来了便捷，特别是我国的手机支付功能更是领先世界。科技推动了时代的发展。现在人们办公大多已从传统的面对面办公转换到线上办公。线上办公拥有更大的优点，信息种类全、流程清晰、结果反馈快。由于传统办公需要亲力亲为，信息单一，需要多部门面对面共同配合而逐渐被加入线上办公方式。

现在，网络覆盖范围扩大，价格便宜，各大商户都开放的有无线网络。手机也得到了普及，计算机技术也深入到手机中。普通生活、娱乐等都可以在线上解决。线上已成为趋势，大部分的行业都可以在线上开通业务，通过线上为人们解决问题，改变面对面方式，提高工作效率以及减少时间浪费。
## 1.2课题现状与实现意义
` `现在网上办公管理平台使用率高的有企业办公软件、收银软件、会计软件以及各类国家性质的办公平台。对于驾考管理来言，想要突破发展就需要加入线上平台，传统预约考试需要先到有关部门了解相关政策和准备需要的资料，资料完善后再次到有关部门进行提交，在等待结果时也需要一定的时间等待，非常浪费时间，工作效率低下。

本系统采用管理员对用户、驾校的模式，管理员利用本平台可以管理驾校信息、考试信息、预约信息、用户信息等。本系统可以帮助管理员工作管理，实现考试预约的无地域、无时间审核。预约用户可以随时浏览、查询详情，可以了解政策的详情以及预约结果。本系统可以帮助用户更快的预约考试和跟踪结果，帮助管理员增加工作途径，减少时间费用。还可以帮助用户报名驾校、预约练车和在线考试，帮助驾校管理学员，招收学生和组织考试等。本优选驾考小程序实现数据的自动化，减少管理员的工作内容并实现数据的清晰化。
## 1.3课题内容
`    `本优选驾考小程序使用角色可以分为用户、管理员、驾校。用户可以根据要求提供预约的资料，管理员在收到用户的预约后可以进行在线审核，当通过审核后用户可以在自己的操作平台里看到预约结果，同时用户可以查询自己的多项预约结果。实现报名驾校，预约练车。帮助驾校管理学员信息、考试信息、安排学员的练车和报名信息。管理员同时可以管理用户信息和驾校。
## 1.4论文结构安排
`   `本论文的结构安排为三部分，分别为：

（1）第一部分，

摘要，本部分为简单的阐述，使读者可以对本论文有大致的了解；

外文翻译，采用英语对摘要进行翻译；

目录，本部分可以使读者对本论文有详细的了解。

（2）第二部分为正文部分，

绪论，本章从课题开发的来源、现状来进行介绍，总结出本系统开发的意义以及内容等；

系统分析，本章包括语言、技术等的介绍以及系统的需求分析、可行性分析、流程分析等；

系统设计，本章包括系统的功能结构图、数据库设计等；

系统实现，本章采用系统运行截图加文字进行本系统的详细介绍；

系统测试，本章采用测试的方法进行主要核心功能的测试介绍；

（3）第三部分为总结、致谢、参考文献。

第2章　系统分析
## 2.1系统使用相关技术分析
### 2.1.1Java语言介绍
Java语言是一种分布式的简单的 开发语言，有很好的特征，在安全方面、性能方面等。非常适合在Internet环境中使用，也是目前企业级运用中最常用的一个编程语言，具有很大的影响力。主要是通过面向对象的形式进行开发，这样的话，就更能满足人们的需求。在编程开发使用中，主要通过封装的方式，通过类来实现，具有很好的可编辑行和操作性，这就是面向对象语言的最大特性，还可以在同一个类中把共同特性的类封装起来，形成一个抽象类，抽象类形容的不是一个对象，而是一个实体，这样就使用过程中就可以进行实例化，达到更好的效果。类之间还可以进行继承，比如一个类可以把另个类的特征进行继承，这样就可以重复使用，所以说这种继承性的类实际上还是同一个类体，这样就可以达到最大的效果。通过java开发的代码还有很好的扩展性，可以通过不同的类达到的不同的效果，更好的提高使用效率，而且在后期维护方面非常的方便，开发的代码更加实用，更加简洁。
### 2.1.2Mysql数据库介绍
Mysql数据库是Oracle公司推出的一个数据库管理软件，有很好的性能设计，可以充分发挥和利用互联网的优势，而且在数据库管理方面非常的方便，支持图形化管理，非常适合新手的使用，可以直接在本地进行数据管理和配置，而且有很强大的数据处理能力，还有很好的安全性。在数据存储的过程中可以支持多处理器的存储结构，可以自动生产和处理sql语句，有很强大的数据读取和复制存储功能，最最重要的是一个开放式的数据软件，可以为开放人员提供一个很好的数据库管理平台。
### 2.1.3Tomcat服务器介绍
Tomcat服务器是一个小型的轻量级服务器，非常适合一些小型的系统和本地的服务器使用，特别适合一些新手开发者使用。Tomcat服务器主要是当成java程序的服务器使用，Tomcat服务器相当于就是Apache的一个扩展应用，区别就是他可以独立运行，当客户端上配置好Tomcat服务器以后，就可以直接通过服务器对HTML页面完成数据访问和响应。非常受程序员的喜欢，因为占用的运行空间非常的小时，不影响服务器性能，而且扩展性很好，支持很多开发过程中常用的功能，可以根据开发者的需求进行不断的改进和完善，所以说Tomcat服务器是目前使用非常广泛的一个服务器。
### 2.1.4微信小程序介绍
微信小程序是近几年兴起的一种不需要安装App就可以使用的应用。它是借用微信进行运行的，不占内存，使用方便所以在现实生活中使用率非常大。微信小程序可以通过搜索、扫码就打开应用，属于新的技术，现在多种行业都加入到微信小程序里来，比如各种购物平台、移动运营商、火车票、汽车票等，非常受欢迎。
### 2.1.5 SSM框架介绍
SSM框架为一种由Spring和MyBatis组合而成的框架，属于一种简单的网页框架。在工作中通过页面向控制器发送请求，然后由控制器进行处理逻辑的调用，最后由逻辑层向持久层传送消息，最终由控制器调用视图进行数据的展示。
## 2.2系统可行性分析
`   `系统是否可行决定了系统开发的成功性。想要系统的设计工作不会白费就需要经过详细的系统可行性分析。根据充分调查和参考相关论文发现，系统的可行性分析一般包括系统的技术可行性分析、系统的经济可行性分析、系统的操作可行性分析三种。
### 2.2.1系统经济可行性分析
`   `本系统是小程序型的管理平台，采用的Java语言开发的，开发周期比较短，而且技术成熟，所以在开发过程中没有过高的投入要求，有很好的经济可行性。
### 2.2.2系统技术可行性分析
本系统采用的技术有Jsp网页技术、Mysql数据库、B/s模式、Java语言等。

（1）通过Jsp进行前台的页面开发，具有很好的稳定性，而且可以直接在线升级维护，可以更方便的实现数据管理，通过Jsp的最大特征就是系统提前已经自动完成了很大不重要的简单工作，可以自动生成很多常规代码，这样减少很大的工作量。而且jsp技术非常成熟，可以参考的案例也非常多。

（2）数据库采用Mysql数据库，也是非常适合学生用的一款小型数据库，使用起来非常的简单，而且数据处理效率高。

（3）采用B/s模式的网站已经是目前的开发主流，也是未来的发展方向。

（4）采用Java语言进行后台代码的开发，是面向对象的开发语言，可以直接查看和调用已用的案例，可以直接调用Xml服务，而且兼容性非常的强，不管是哪个平台，都可以直接调用，而且是通用的，可以提高开发者的工作效率，而且有很好的灵活性，使用起来非常的方便。

所以通过以上几点的分析，开发人员只要能熟练的操作以上的技术就行，具有开发技术可行性。
### 2.2.3系统操作可行性分析
`　`因为本系统是采用小程序模式进行开发的，所以只有安装的有微信开发者工具和数据库服务器就可以进行系统的访问的使用。而且非常的简单易操作，普通用户只需要有最简单的互联网操作经验就行。
## 2.3系统需求分析
`    `现在网上管理系统的技术发展已经非常成熟，各大公司的使用率也非常可观，特别是在一些重要的行业里使用率更高。优选驾考小程序可以方便用户更快的解决自己的问题，并且售后服务非常完善。现在实体企业里也会采用线上、线下相结合的方式进行工作，各部门的资料可以共享调用，工作内容可以在线发布，非常适合现代生活。优选驾考小程序是时代的趋势，其需求性不言而喻。
### 2.3.1传统管理系统优缺点分析
`  `在最早出现的管理系统中主要使用人为工作人员，这类管理系统主要是采用C/s模式，这种模式可以保证数据的安全和存储性，数据库采用的也都是复杂、高性能的数据库，这类管理系统需要使用人员经过定期的培训才可以使用。随着网络的快速发展，这类管理系统的缺点也逐渐暴露出来，由于采用C/s模式就必须要求固定的客户端，这就需要足够严格的客户端条件，一旦客户端出现问题，系统里的数据都会出现问题，稳定性差，而且C/s模式的系统最大的问题是不能多次修改，如果系统经过了多次的补充、修改就会造成运行出错，为系统的使用造成不便。传统的管理系统通常采用的是脚本语言，脚本语言不够成熟，更容易出错，造成使用人员的损失。
### 2.3.2本优选驾考小程序分析
`  `通过对传统管理系统的分析发现主要问题在于系统的模式架构上和数据库上。想要数据更为稳定就需要更稳定的数据库，好的数据库可以保证系统拥有更大的容错率和移植性，也可以在多种数据库中进行相互结合以此来保证系统里数据的安全。同时还需要注意系统的延续性，时代不断的发展，就会要求系统的服务更加的完善。想要使系统的生命周期更长就需要更为成熟的开发语言、技术、环境等。

本优选驾考小程序服务端采用的模式架构为B/s，B/s框架可以脱离固定的客户端，把系统部署到浏览器上供用户使用，还可以把功能进行模块划分使数据库和操作界面分开，这样可以实现当任何一方出现问题时，另一方不受影响。数据库采用Mysql，Mysql数据库可以单独运行，当用户在进行操作后可自动保存操作后的数据，改变需要去数据库里修改数据的问题。开发语言采用Java，Java语言为动态语言，使用时间长久，已发展的非常成熟。本系统的其它技术包括Eclipse运行软件，Jsp网页技术，Html技术等都是经过时间考验的。
## 2.4系统功能分析
本人参考大量的驾校管理软件以及充分调查需要驾考的用户和管理员、驾校需求，设计出的本优选驾考小程序使用角色为用户、管理员、驾校。框架界面分为用户操作界面、管理员操作界面和驾校操作界面。用户的功能设计为：

1. 个人资料管理功能，可以针对自己的信息资料进行修改管理；
1. 报名入口功能，本界面里展示了不同的驾校信息，可以按照要求进行报名；
1. 学员报名管理功能，本界面里展示了自己所有报名的驾校，可以根据具体情况进行修改；
1. 练车预约功能，可以根据自己的时间进行预约练车；
1. 考试信息功能，可以浏览自己需要参加的考试以及要求进行自我安排；
1. 考试预约功能，在线填写预约信息实现考试的预约；
1. 我的收藏管理功能，管理自己收藏的所有信息；
1. 试卷列表功能，可以查询所有的试卷，选择适合自己的试卷进行考试；
1. 理论考试记录功能，查询考试记录信息；
1. 错题本功能，自己曾经做错的题目都在本界面保存，方便用户进行针对性的学习。

管理员的功能设计为：

1. 驾考文章管理功能，可以发布、编辑、删除驾考文章信息；
1. 个人中心功能，本功能可以修改管理员的个人资料；
1. 学员管理功能，此功能可以对用户的账号、资料等进行审核管理；
1. 驾校管理功能，对驾校的账号、密码等进行管理；
1. 驾照类型管理功能，对不同型号的车需要考不同的驾照，本功能负责类型的管理；
1. 报名入口管理功能，实现学员报名入口信息的审核管理；
1. 学员报名管理功能，实现审核学员报名的功能；
1. 练车预约功能，可以审核学员的预约练车信息；
1. 考试场地管理功能，安排考试的场地；
1. 考试场次管理，安排考试的不同场次；
1. 考试信息管理功能，对考试的内容进行安排；
1. 考试预约管理功能，审核学员的考试预约；
1. 试卷管理功能，可以设置试卷；
1. 试题管理功能，对试题信息进行添加管理；
1. 系统管理功能，发布和管理公告信息、轮播图。

驾校的功能设计为：

1. 个人中心功能，实现对驾校资料的管理；
1. 学员管理功能，实现对自己学员信息的资料管理；
1. 驾考文章管理功能，实现浏览文章信息和管理文章信息；
1. 报名入口管理功能，发布报名信息和管理报名信息；
1. 学员报名管理功能，查询和处理学员的报名；
1. 练车预约功能，审核学员的练车预约并进行安排；
1. 考试信息管理功能，实现考试内容信息的安排管理；
1. 考试预约管理功能，审核学员的预约考试。
## 2.5系统性能分析
在系统分析中还有重要的一点就是系统的性能分析，除却系统的功能分析其它问题都可以划分到系统的性能分析。主要包括系统数据问题、系统运行问题、系统安全问题。

1. 系统数据问题表现在数据库的设计中，因为优选驾考小程序的核心在于预约，在预约操作中会引起多种数据的变化。想要数据在变化时不会出错就需要在数据库设计时注意不同数据字段、类型等的主外键联系；
1. 系统的运行问题表现在多平台、多人在运行系统时的稳定性。系统的运行速度也需要注意，运行的卡顿、读码速度等都需要经过多次测试；
1. 系统的安全性问题表现在不同角色的使用权限，用户做为普通人员的角色不能越权，管理员做为权限最多的角色要可以管理其它几种角色。
## 2.6用例图
`   `根据功能分析得出，本系统的主要使用角色为管理员和用户、驾校。用户可以查看文章、管理预约、申请练车等。管理员可以管理系统信息、用户的资料、审核预约、查询文章、管理驾照类型等。系统管理员用例图如下图2-1所示：

`　　    `![](/md/blog.001.png)

图2-1优选驾考小程序管理员用例图

用户用例图如下图2-2所示：

![](/md/blog.002.png)

图2-2用户用例图

驾校用例图如下图2-3所示：

![](/md/blog.003.png)

图2-3驾校用例图
## 2.7系统业务流程
业务流程可以按照用户使用本系统的步骤进行设计。本系统中用户的流程为查看驾校、报名驾校、预约练车、预约考试等。管理员的流程为管理考试信息、预约信息、驾校信息等，驾校的流程为管理报名信息、预约信息和考试信息等。优选驾考小程序的业务流程如下图2-4所示：

![](/md/blog.004.png)

图2-4优选驾考小程序业务流程图

（1）用户登录是使用本系统的必经之路，在登录时需要输入信息、判断信息。用户登录的流程图如下图2-5所示：

![](/md/blog.005.png)

图2-5用户登录的流程图

（2）用户预约时需要判断填写的信息是否正确，当填写的信息都为正确时才可以把预约信息传送到审核人员手中。用户预约流程图如下图2-6所示：

![](/md/blog.006.png)

图2-6用户预约流程图

第3章　系统设计
## 3.1系统体系结构
`    `系统的体系结构非常重要，往往决定了系统的质量和生命周期。针对不同的系统可以采用不同的系统体系结构。本系统为优选驾考小程序，属于开放式的平台，所以在服务器端的体系结构中采用B/s。B/s结构抛弃了固定客户端要求，采用服务器、客户端的模式。用户操作界面和管理员操作界面、驾校操作界面分开展示。B/s结构基于互联网，需要网络的支持，由用户在浏览器上发布命令，服务器负责向数据库传送命令，最后再由服务器把反馈的结果传回浏览器给用户进行呈现。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
## 3.2系统功能结构
系统的功能结构是系统实现的框架，本系统的主要结构为管理员和用户、驾校。本优选驾考小程序功能结构图如下图3-1所示：

![](/md/blog.007.png)

图3-1优选驾考小程序功能结构图
## 3.3数据库设计
数据库设计在系统设计中占有重大比例，数据库的设计包括ER图设计和数据库表设计。
### 3.3.1ER图设计
根据本系统的特点，本系统设计的主要实体包括管理员信息、用户信息、报名信息、考试信息、文章信息等。

1. 管理员ER图包括的属性有管理员的编号、用户名和密码。管理员ER图如下图3-2所示：

![](/md/blog.008.png)

图3-2管理员实体的ER图

1. 报名信息包含的属性为报名的详细描述，有报名编号、报名人等。报名信息ER图如下图3-3所示：

![](/md/blog.009.png)

`　　　`图3-3报名信息实体ER图

（3）用户信息的属性包括用户的个人资料，有姓名、性别、电话等。用户信息实体ER图如下图3-4所示：

![](/md/blog.010.png)

图3-4用户实体ER图

（4）驾照类别实体的属性有编号、标题。驾照类别实体ER图如下图3-5所示：

![](/md/blog.011.png)

图3-5驾照类别信息实体ER图

(5) 考试信息的实体包括考试时间、考试名称、考试场地等。考试信息实体ER图如下图3-6所示：

![](/md/blog.012.png)

图3-6考试信息实体ER图

（6）本优选驾考小程序的整体实体关系图如下图3-7所示：

![](/md/blog.013.png)

图3-7系统关系ER图
### 3.3.2数据库表设计
`   `根据数据ER图的设计，本系统的数据库表有管理员信息表、用户信息表、考试信息表、报名信息表等。本系统的数据库表如下图3-1至3-14所示：

表3-1　baomingrukou

![](/md/blog.014.png)

||
| :- |
表3-2　config

![](/md/blog.015.png)

||
| :- |
表3-3　discussbaomingrukou

![](/md/blog.016.png)

||
| :- |








表3-4　discussjiakaowenzhang

![](/md/blog.017.png)

||
| :- |
表3-5　discusskaoshixinxi

![](/md/blog.018.png)

||
| :- |


表3-6　exampaper

![](/md/blog.019.png)

||
| :- |
表3-7　examquestion

![](/md/blog.020.png)

||
| :- |


表3-8　examrecord

![](/md/blog.021.png)

表3-9　jiakaowenzhang

![](/md/blog.022.png)

||
| :- |
表3-10　jiaxiao

![](/md/blog.023.png)

||
| :- |
表3-11　jiazhaoleixing

![](/md/blog.024.png)

||
| :- |



表3-12　kaoshichangci

![](/md/blog.025.png)

||
| :- |
表3-13　kaoshichangdi

![](/md/blog.026.png)

||
| :- |
表3-14　kaoshixinxi

![](/md/blog.027.png)

第4章 系统实现
## 4.1用户注册功能的界面实现
`  　`用户在使用本系统时需要先进行注册，注册界面里需要填写用户名、密码、姓名、性别、手机号、身份证号。用户注册功能的运行界面如下图4-1所示：

![](/md/blog.028.png)

图4-1用户注册运行界面
## 4.2登录功能的界面实现
用户注册后，需要登录。登录界面设计的目的是保证当前的使用角色等级。管理员、驾校同样需要登录后才可以进行操作。在管理员、驾校的登录界面里加入了权限的选择，在登录时只需要填写用户账号和密码就可以实现。用户登录的运行界面如下图4-2所示：

![](/md/blog.029.png)

图4-2用户登录的运行界面

在登录的界面中包含的元素有系统题目、输入框、登录按钮、选择框。本系统的使用权限为管理员和用户、驾校。管理员登录的运行界面如下图4-3所示：  

![](/md/blog.030.png)

图4-3管理员登录界面
## 4.3管理员功能的设计实现
### 4.3.1学员管理功能的实现界面
学员的信息可由管理员添加，本功能设计的目的是添加和审核学员的资料，当发现不当的使用用户可以删除其账号。当删除用户信息后相对应的用户信息表里的信息也会随着删除掉。查询学员信息功能的运行界面如下图4-4所示：

![](/md/blog.031.png)

图4-4查询学员信息功能的运行界面
### 4.3.2 个人中心管理功能的实现界面
`   `个人中心管理的内容包括管理个人资料和修改密码。本系统中可以拥有多个管理员。个人中心功能的运行界面如下图4-5所示：

![](/md/blog.032.png)

图4-5个人中心功能的运行界面
### 4.3.3试卷管理功能的实现界面
`   `用户浏览的试卷都是由管理员在此功能里进行维护添加的，同样当管理员添加、编辑试卷信息后，数据库表中的试卷信息表也会发生改变。试卷信息管理功能的运行界面如下图4-6所示：

![](/md/blog.033.png)

图4-6试卷信息管理功能的运行界面

在添加试卷信息时可以重置和提交。发布新试卷的运行界面如下图4-7所示：

![](/md/blog.034.png)

图4-7发布新试卷的运行界面
### 4.3.4 驾考文章管理功能的实现界面
`   `管理员可以发布和管理驾考文章，方便用户浏览。可以点击驾考文章详情进行信息的详细了解。驾考文章管理功能的运行界面如下图4-8所示：

![](/md/blog.035.png)

图4-8驾考文章信息管理运行界面

当管理员点击添加驾考文章功能时会进入本界面，按照要求填写信息就可以完成驾考文章的发布。添加驾考文章运行界面如下图4-9所示：

![](/md/blog.036.png)

图4-9添加驾考文章的运行界面展示
## 4.4用户角色功能的界面实现
### 4.4.1报名功能的界面实现
`  　`用户的功能主要为报名驾校、预约练车、预约考试、在线考试。在报名时需要选择好要报名的驾校、驾照类型。报名功能的运行界面如下图4-10所示：

![](/md/blog.037.png)

图4-10报名运行界面
### 4.4.2预约考试功能的实现界面
`   `用户在查询到考试信息后可以在线预约考试。预约考试功能的运行界面如下图4-11所示：

![](/md/blog.038.png)

图4-11预约考试功能的运行界面
### 4.4.3预约练车功能的实现界面
在报名成功后，用户可以预约练车。用户预约练车功能的实现界面如下图4-12所示：

![](/md/blog.039.png)

图4-12预约练车功能的实现界面
### 4.4.4在线考试功能的实现
在试卷列表里可以选择试卷进行在线考试，实现界面如下图4-13所示：

![](/md/blog.040.png)

图4-13在线考试功能的实现界面
### 4.4.5我的功能界面实现
我的功能界面相关于用户中心，展示了用户的所有操作内容。我的功能界面实现如下图4-14所示：

![](/md/blog.041.png)

图4-14我的功能实现界面
## 4.5驾校角色功能的实现界面
驾校的功能与管理员的功能相似，没有管理员的权力大，可以管理学员信息、报名信息、考试预约信息、考试信息、驾考文章信息、练车预约信息、考试预约信息。实现界面如下图4-15所示：

![](/md/blog.042.png)

图4-15驾校角色的功能实现界面

第5章 系统测试
# 系统测试的方










