import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Style_Manga_Content.scss';


class DemoManga extends Component {



    render() {

        return (
            <React.Fragment>
                <div className='container-manga'>
                    <div className='title-manga' >
                        Có một kẻ đi lang thang<br />
                    </div>
                    <p>Tác giả: Anh Lan</p>
                    <div className='content-manga'
                        style={{ userSelect: 'none' }}
                    >
                        Có một kẻ đi lang thang....<br />
                        Ánh mắt vô định, chân đều bước.<br />
                        Đầu tóc hơi rối, nước da ngâm.<br />
                        Có một kẻ đi lang thang.<br />
                        Người có hỏi: "Ngươi đi đâu đấy?"<br />
                        Kẻ lang thang sẽ trả lời: "Ta đi về nhà."<br />
                        Ngày qua ngày, tháng qua tháng.<br />
                        Kẻ lang thang cũng chưa tìm được nhà để về.<br />
                        Có một kẻ đi lang thang....<br />
                        Ai có hỏi: "Ngươi đi đâu?"<br />
                        Kẻ lang thang lại trả lời: "Ta đi về nhà."<br />
                        Nắng rồi mưa, mưa rồi lại nắng.<br />
                        Kẻ lang thang ấy, vẫn chưa về được nhà<br />

                        Có một kẻ đi lang thang<br />
                        Có một kẻ đi lang thang.<br /><br />
                        Kẻ lang thang ấy vốn là một chàng thiếu gia, ăn no mặc ấm, gia đình hòa thuận. Phụ mẫu yêu thương cưng chiều hết mực, huynh tỷ cũng nhường nhịn yêu thương biết bao nhiêu. Cuộc sống ấy có biết bao người mơ ước, khát vọng. Nhưng, y không giữ được gia đình ấy. Y không bảo vệ được phụ mẫu, đến huynh tỷ luôn che chở y, vậy mà y không thể bảo vệ lại họ được, dù chỉ một lần, cũng không được. Chỉ vì một đoạn nhân duyên, duyên thì ngắn ngủi, người còn kẻ mất, phận người cũng lận đận lênh đênh như thuyền trên biển lớn.<br /><br />
                        Kẻ lang thang vẫn đi trên con đường lớn đầy cỏ dại, bụi bặm bay tứ tung theo từng cơn gió. Đôi chân trần khô ráp, chai sạn giẫm lên những viên đá vỡ nát, ‘soàn soạt, soàn soạt’.<br /><br />
                        Con đường dài vun vút, nhìn mãi không có lấy một căn nhà.
                        Gió lại thổi, hàng cây ven đường lại đung đưa theo từng cơn gió. Rặng tre phía xa cũng lắc lư, lá va vào nhau vang lên tiếng ‘xào xạc’, thân tre cũng ‘kẽo kẹt’ cọ vào nhau. Kẻ lang thang ngừng bước, từ từ ngẩng đầu nhìn lên mặt trời đang treo trên đỉnh đầu. Đôi mắt đen tuyền, sâu hun hút, nhưng ánh mắt ấy lại không có chút sức sống nào. Đôi môi y cũng khô khốc, nứt nẻ như thể đã rất lâu rồi chưa uống nước vậy.<br /><br />
                        Kẻ lang thang chớp mắt một cái, cúi đầu xuống nhìn và đôi chân của mình rồi khẽ thở dài: “Cố lên, sắp về tới nhà rồi.”
                        Y chớp mắt thêm lần nữa, ngẩng đầu nhìn về phái cuối con đường, bước đều bước. Miệng ngâm nga: “Đường dài, đường dài ta cứ bước. Bước chân mỏi mệt, đớn đau hay rướm máu. Ta vẫn bỏ mặc. Đường dài, đường dài dẫn về nhà. <br /><br />
                        Cuối đường kia là nhà ta....”
                        Cứ thế, kẻ lang thang ấy đi về phía cuối con đường. Bóng lưng nhỏ nhắn, cô đơn ấy nhỏ dần, nhỏ dần rồi khuất bóng sau những hàng cây.
                        Gió lại thổi, bụi bay tứ tung, mù mịt cả khoảng trời. Cỏ lắc lư rồi ngã sạp một mảng lớn. Hàng cây lớn cũng nghiêng theo chiều gió, lá va vào nhau xào xạc. Những chiếc là ngả màu bị gió thổi lìa khỏi cành, lượn tròn vài vòng trên không trung rồi tiếp đất, sau đó lại bị ngọn gió lùa bay lên không trung, thổi bay đến nơi xa....<br /><br />
                    </div>
                </div>
                {/* Bình luận */}

            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoManga);
