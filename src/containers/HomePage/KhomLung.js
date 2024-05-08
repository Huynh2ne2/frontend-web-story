import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Style_Manga_Content.scss';
import { withRouter } from 'react-router';


class KhomLung extends Component {



    render() {

        return (
            <React.Fragment>
                <div className='container-manga'>
                    <div className='title-manga' >
                        Khom Lưng<br />
                    </div>
                    <p>Chương 1: Man Man</p>
                    <p>Nguồn trích dẫn: truyenfull.vn</p>
                    <div className='content-manga'
                        style={{ userSelect: 'none' }}
                    >
                        Mưa gió kéo đến nơi đất Thục, cửa sổ bị gió lớn đẩy tung, đánh thẳng vào chấn song vang lên từng tiếng “ầm ầm” inh tai nhức óc. Nghiên mực chặn giấy trên bàn dài đều bị văng xuống đất. Gió rít cuốn theo mấy trang giấy bay tứ tung bốn phía, rơi bừa bộn dưới bàn, có mấy quyển tấu chương còn rách thành hai nửa.<br /><br />
                        Trong không khí tràn ngập mùi máu tanh nồng nặc. Vũng máu trên nền đất, bốn năm cô gái trẻ mặc trang phục cung đình ngổn ngang nằm dưới đó, có một người trong đó còn chưa chết, đôi mắt tuyệt đẹp nửa khép hở, bờ môi mệt mỏi hơi mấp máy, một dòng máu ứa ra từ khóe miệng như con cá sắp chết giãy giụa giữa một dòng máu loãng.<br /><br />

                        Các nàng đều là phi tử của Hậu đế Lưu Diễm, Lưu Phi trẻ nhất chỉ mới được mười ba, phụ thân là Thái Thú Thiên Thủy, sau khi hậu đế lùi về Trần Thương mới vội vã nạp vào, còn chưa được nửa năm, Trần Thương thất thủ, các nàng theo Hậu đế trốn chạy đến nơi này, Bao Thành[1] trong đất Thục.<br /><br />
                        [1] Bao Thành: là tên huyện thời cổ đại, ngày nay thuộc thành phố Thiểm Tây.<br /><br />

                        Nhưng mà giờ đây, những nữ nhân đương lúc thanh xuân tươi đẹp đều đã chết.<br /><br />
                        Chỉ một chốc trước thôi, Lưu Diễm còn gọi những nữ nhân này tới đây, nhìn thái giám tùy tùng Lưu Phiến giết chết từng người một.<br /><br />

                        Trên mặt Lưu phi còn dính mấy giọt máu, nước mắt như một chuỗi ngọc trai lăn dọc không ngừng trên khuôn mặt còn chưa hết ngây thơ đang kinh hồn bạt vía. Trước ngực của bộ cung trang màu vàng nhạt, dòng máu thấm ướt từ bên sườn cổ đỏ hồng mà nhức mắt.<br /><br />

                        Vừa nãy khi Lưu Phiến chém một đao vào cổ nàng, có lẽ lưỡi đao đó đã giết quá nhiều người, có thể là do nàng đã tránh được đường kiếm, vết thương trên cổ chưa phải là trí mạng. Nàng nằm trên mặt đất, nghiêng đầu, một bên cổ máu vẫn ào ào chảy, một bên nàng dùng hết cả tay và chân để bò lên phía trước, hi vọng chạy thoát khỏi tòa nhà đầy máu tanh và hơi lạnh tử vong.<br /><br />

                        Phía sau nàng là vết máu ngoằn ngoèo sau khi mình bò qua.<br /><br />

                        Khuôn mặt tuấn tú của Hậu đế Lưu Diễm đờ đẫn như tượng bùn cây gộc không còn sự sống. Đôi mắt hắn không hề nhìn thấy Lưu phi đang khổ sở cầu xin mình tha thứ, hắn lướt qua đỉnh đầu Lưu phi, mờ mịt trông về hướng xa xa chẳng thấy được cửa thành.<br /><br />

                        Bao Thành không còn giữ được nữa, bị phá rồi.<br /><br />

                        Bên tai hắn loáng thoáng nghe thấy tiếng binh sĩ nước Yên phá thành, sau đó là tiếng hét to hoan hô rung trời lở đất. Không tốn khoảng thời gian quá dài, họ sẽ ào tới đây.<br /><br />

                        Chỉ mới nửa năm trước, quân Yên U[2] mấy đời sống ở phương Bắc dưới triều nhà Hán, Ngụy Thiệu chiếm Lạc Dương tự mình xưng đế, từ khi Lạc Dương rơi vào tay hắn, thiên hạ Cửu Châu[3] tám chín phần mười cũng quy về dưới trướng, thế cục đã định, Ngụy Nghịch xưng đế ở U Châu, lấy quốc hiệu là Yên, đuổi bắt ép Hậu đế Lưu Diễm chỉ còn một đường lùi phía Tây.<br /><br />

                        [2] Yên U: Tiền Yên U đế Mộ Dung Vĩ (350-384) là quân vương cuối cùng của thời đại Tiền Yên năm hồ* mười sáu nước (hồ: chỉ các dân tộc phía Bắc và Tây Trung Quốc thời xưa)<br /><br />

                        [3] Cửu Châu: chỉ chín khu vực hành chính thời xưa<br /><br />

                        Giờ đây, hai ngàn binh sĩ cuối cùng cũng mất.<br /><br />

                        Hắn không còn đường nào để lui nữa.<br /><br />

                        Vết máu văng tung tóe trên khuôn mặt Lưu Phiến, nhìn như ác quỷ. Hắn cắn răng nghiến lợi ép Lưu Phi đang khổ sở cầu xin tới trước bục cửa, chém thẳng một đao từ phía sau.<br /><br />

                        Tiếng “phịch” nặng nề, thậm chí ngay cả một tiếng kêu cô gái đó cũng không kêu lên được, cần cổ rũ xuống tạo thành một tư thế đầy quái dị, cơ thể mềm oặt như sợi bún ngã nhào xuống đất không tiếng động.<br /><br />

                        Dòng máu ấm nóng phun trào từ sau cổ, tung tóe trên nửa mặt bức tường. Tứ chi Lưu Phi lúc đầu còn co quắp, dần dần cũng ngừng lại không nhúc nhích gì thêm, chỉ có đôi mắt lộ ra sau mái tóc rối mù vẫn nhìn chằm chằm nơi đối diện, sức sống trong đáy mắt nhanh chóng lụi tàn đi, tử khí màu xanh đen âm u lan tràn đến.<br /><br />

                        “Bệ hạ, hoàng hậu…”<br /><br />
                        Lưu Phiến kéo lưỡi đao đến gần, trên mặt dao vẫn còn dòng máu chảy, hắn nhìn về phía Tiểu Kiều đang run rẩy trên giường nhỏ.<br /><br />

                        Lưu Diễm từ từ quay người sang, ánh mắt mờ mịt rơi xuống người Tiểu Kiều, nhìn nàng chăm chú, rốt cuộc ánh mắt đó cũng không còn đờ đẫn, từ từ lặng lại nét bi thương, bất lực và khổ sở.<br /><br />

                        Hắn bước tới bên cạnh Tiểu Kiều từng bước một, cuối cùng cũng đứng trước mặt nàng, ngón tay lạnh lẽo lưu luyến nhẹ nhàng chạm vào khuôn mặt đó, bỗng nhiên hắn ôm nàng thật chặt, cực kì mạnh mẽ, như thể chỉ hận không thể vò nát từng tấc vào máu thịt bản thân.<br /><br />

                        “Man Man! Man Man! Người nhà nàng bị Ngụy Nghịch làm hại, tỷ tỷ của nàng cũng bị Ngụy Nghịch phế truất mà chết đi, trẫm biết nàng hận Ngụy Nghịch đến tận xương. Vốn trẫm còn muốn báo thù cho nàng, dấy binh thảo Nghịch[4], nhưng mà vận số của Đại Hán đã hết, trẫm không thể cứu vãn được! Trẫm không thể để nàng rơi vào tay trộm rồi chịu nhục. Man Man, trẫm sẽ giết nàng trước rồi cũng sẽ theo nàng, kiếp sau chúng ta lại làm phu thê!”<br /><br />

                        [4]thảo phạt, đánh dẹp Ngụy Nghịch.<br /><br />

                        “Bệ hạ, mười lăm tuổi thiếp gả cho quân vương, đến nay đã vừa qua mười sáu! Bệ hạ đối với thiếp tình thâm nghĩa trọng, nếu bệ hạ đi, thiếp há có thể sống một mình? Thiếp nguyện theo ngài, đời đời kiếp kiếp, vĩnh viễn không xa rời!”.<br /><br />

                        Nữ tử có nhũ danh là Man Man này da trắng mặt xinh, như thể một khối ngọc tuyệt mĩ không tì vết, giờ phút này đây, mặc dù khuôn mặt đó đã trắng trợt không chút máu, nước mắt giàn giụa, nhưng ánh mắt nàng nhìn Hậu đế vẫn ngập tràn dứt khoát và quyết tuyệt.
                        <br /><br />

                        Nàng đẩy Lưu Diễm ra tự mình đứng lên, từ từ nhắm hai mắt lại hơi ngẩng cằm. Bộ áo mày xanh lam tung bay như nhảy nhót, cả người như bồng bềnh sắp bay.<br /><br />

                        “A…”<br /><br />

                        Theo tiếng hét to tan nát thê lương của Lưu Diễm, lưỡi dao lạnh sắc như băng cắm sâu vào buồng tim ấm áp mà mềm mại của nàng.<br /><br />

                        <center>
                            <p>xem full truyện tại</p>
                            <a href='https://truyenfull.vn/khom-lung/chuong-2/'>https://truyenfull.vn/khom-lung/chuong-2/</a>
                        </center>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KhomLung));
