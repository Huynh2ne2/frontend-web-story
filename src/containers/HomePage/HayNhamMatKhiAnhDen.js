import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Style_Manga_Content.scss';
import { withRouter } from 'react-router';


class HayNhamMatKhiAnhDen extends Component {



    render() {

        return (
            <React.Fragment>
                <div className='container-manga'>
                    <div className='title-manga' >
                        Hãy nhắm mắt khi anh đến<br />
                    </div>
                    <p>Chương 1: Người đàn ông kì quái</p>
                    <p>Nguồn trích dẫn: truyenfull.vn</p>
                    <div className='content-manga'
                        style={{ userSelect: 'none' }}
                    >
                        Bầu trời xanh xám bao phủ trên rặng núi phía xa xa. Lớp tuyết mỏng trải đầy trên lối đi nhỏ trong rừng cây. Không khí giá lạnh và trong lành, khiến con người nhanh chóng cảm thấy thân thể tựa hồ được lấp đầy bời mùi của tuyết và cành thông, giá lạnh nhưng cũng rất dễ chịu.<br /><br />
                        Giản Dao xuống xe buýt ở bên đường cái, cô rẽ vào lối nhỏ trải đá, đi bộ hơn mười phút, cuối cùng cũng nhìn thấy ngôi biệt thự nhỏ kiểu Châu Âu mái màu xanh xám nằm trên sườn núi phía trước.<br /><br />

                        Kể từ lúc Giản Dao có ký ức, ngôi biệt thự này đã nằm trên sườn núi ở ngoại ô thành phố. Hơn hai mươi năm trôi qua, dù nhìn từ góc độ thẩm mỹ của thời hiện tại, tòa kiến trúc tinh tế này cũng không hề lỗi thời. Chỉ là nhiều năm qua, nơi đây không có người sinh sống, ngôi nhà nhỏ lẻ loi tọa lạc trên dốc núi, lúc nào cũng vắng lặng tối đèn. Khi Giản Dao còn bé, có người dọa cô, bảo đây là ngôi nhà ma. Sau này trưởng thành, cô lờ mờ nghe nói, ngôi biệt thự là tài sản của một nhân vật trí thức "hải quy". Bởi vì người vợ ốm nặng qua đời, nhân vật trí thức đó lại đưa cậu con trai còn nhỏ ra nước ngoài. ("Hải quy" viết tắt của từ hải ngoại quy lai: người từ nước ngoài trở về)<br /><br />
                        Hôm nay, ngôi biệt thự được thắp đèn sáng. Bức tường ngoài vốn loang lổ đã quét nước sơn mới, cả bờ tường là một màu xanh lục của dây thường xuân. Rêu xanh và cỏ dại mọc đầy ở cổng ra vào đã được xử lý sạch sẽ từ lúc nào.<br /><br />

                        Giản Dao là sinh viên năm thứ tư khoa Anh ngữ. Hôm nay cô đến đây là vì thầy giáo thời trung học giới thiệu công việc dịch thuật cho cô. Công việc này thù lao không tồi, nhưng nghe nói chủ nhân ở đây rất khó tính, trước đó được giới thiệu không ít phiên dịch nhưng anh ta đều không ưng ý. Vì vậy Giản Dao vừa bước vào kì nghỉ đông, thầy giáo lập tức tìm đến cô học trò tâm đắc.<br /><br />
                        Giản Dao tháo găng tay len, bước lên gõ cửa. Mở cửa là một người đàn ông trẻ tuổi tầm hai mươi mấy. Anh ta mặc quần âu đen, áo len mỏng, thân hình cao gầy, diện mạo thanh tú. Nhìn thấy cô, người đàn ông để lộ ý cười: "Em là Giản Dao?"<br /><br />

                        Gương mặt Giản Dao đông cứng đến ửng đỏ, hơi thở toàn khói trắng, đôi mắt cô ướt rượt: "Vâng, em là Giản Dao. Chào anh!"<br /><br />

                        "Vào đi em." Người đàn ông nghiêng người, để Giản Dao đi vào nhà.<br /><br />

                        Trong nhà bài trí theo phong cách cổ điển Châu Âu, rèm cửa sổ màu tím mờ viền vàng tầng tầng lớp lớp, ghế sofa nhung hình vòng cung cỡ lớn, ghế dài với tay nắm sơn màu bạc, ngọn lửa cháy hừng hực trong lò sưởi, tất cả tạo cảm giác vừa cổ kính vừa tĩnh mịch. Ngoài ra còn có cầu thang gỗ màu nâu thẫm uốn lượn trên tầng hai. Tầng trên vô cùng yên tĩnh, giống như không có người. Điểm đáng chú ý duy nhất của ngôi nhà là mọi cửa sổ đều được lắp lan can bằng kim loại, rèm cửa sổ đóng kín, không để lọt một tia sáng vào nhà.<br /><br />

                        Người đàn ông trẻ tuổi rửa tay trên bồn rửa mặt, xắn tay áo, pha cốc trà nóng cho Giản Dao. Anh ta ngồi phía đối diện cô, trên người anh ta thoang thoảng một mùi nhàn nhạt rất quen thuộc, nhưng Giản Dao nhất thời không nghĩ ra cô đã từng ngửi thấy ở đâu.<br /><br />

                        Người đàn ông nở nụ cười hòa nhã: "Tôi xin tự giới thiệu, tôi tên Phó Tử Ngộ, chủ nhân của ngôi nhà này tên là Bạc Cận Ngôn. Tôi là bạn của cậu ấy. Chúng tôi cần tìm một phiên dịch để dịch tài liệu của cậu ấy sang tiếng Trung."<br /><br />

                        Giản Dao gật đầu. Không hiểu Bạc Cận Ngôn có quan hệ với chủ nhân của ngôi biệt thự năm xưa, hay là vật còn người mất?<br /><br />

                        Phó Tử Ngộ lấy một tập giấy và một cây bút trên bàn uống trà đưa cho Giản Dao: "Em bắt đầu đi. Tôi cũng xin nói thẳng, chúng tôi cần kiểm tra một chút, xem em có thể đảm nhiệm công việc này. Em hãy dịch tập tài liệu tiếng Anh trong nữa tiếng đồng hồ."<br /><br />

                        Giản Dao lật tài liệu, ngẩng đầu hỏi: "Anh có máy tính không?"<br /><br />

                        Phó Tử Ngộ lắc đầu, mỉm cười: "Cận Ngôn thích viết tay."<br /><br />

                        "Được ạ." Giản Dao cầm giấy bút, bắt đầu cắm cúi dịch tài liệu. Phó Tử Ngộ đứng dậy đi rửa tay rồi đứng tựa vào cửa sổ uống trà.<br /><br />

                        "Nạn nhân bị hãm hiếp đến chết, chân tay có dấu vết bị trói chặt, thân dưới xuất hiện nhiều vết thương bị dập nát..." Vừa dịch vài câu đầu, Giản Dao cảm thấy hơi bất ngờ. Cô ngẩng đầu, nhưng sắc mặt Phó Tử Ngộ rất thản nhiên.<br /><br />

                        Trước đây Giản Dao từng dịch nhiều tài liệu chuyên ngành nên cô cũng không đến nỗi quá kinh ngạc. Chỉ là một lúc sau, cô gặp phải từ ngữ xa lạ, hơn nữa khi đọc lướt qua tài liệu, cô phát hiện có không ít từ hiếm thấy. Thế là cô mở miệng hỏi: "Anh có từ điển chuyên ngành không?"<br /><br />

                        Phó Tử Ngộ cười cười, chỉ tay lên giá sách: "Em cứ sử dụng tùy ý."<br /><br />

                        Giản Dao nhanh chóng tìm mấy quyển từ điển, bắt đầu đối chiếu rồi dịch tiếp.<br /><br />

                        "Sexhanges: làm ngạt thở để đạt khoái cảm. Parentiside: giết chết người thân..." Cô biết những từ này mới lạ.<br /><br />
                        Thì ra Bạc Cân Ngôn đang ở tầng trên. Giản Dao ngồi nghiêm chỉnh ở ghế sofa, lặng lẽ chờ đợi.<br /><br />

                        Phó Tử Ngộ nhanh chóng xuống nhà. Anh ta đi đến bồn nước rửa tay, rút khăn tay lau sạch sẽ mới ngồi xuống phía đối diện Giản Dao: "Cậu ấy vẫn đang xem, chắc cần một chút thời gian."<br /><br />

                        "Vâng ạ."<br /><br />

                        Hai người trò chuyện vài câu. Phó Tử Ngộ cười hỏi: "Em đang học đại học ở thành phố B à?"<br /><br />

                        Giản Dao trả lời: "Vâng, sang năm em mới tốt nghiệp."<br /><br />

                        Phó Tử Ngộ gật đầu: "Không tồi, chúng ta nói chuyện lâu như vậy, em vẫn chưa biết tôi làm nghề gì." Anh ta dừng lại, nheo mắt nhìn cô: "Em thử đoán xem."<br /><br />

                        Anh ta lớn hơn Giản Dao vài tuổi, thái độ hòa nhã lịch sự. Giản Dao có ấn tượng tốt về anh ta, cô cười trả lời: "Bác sỹ."<br /><br />

                        Ý cười trong mắt Phó Tử Ngộ càng sâu hơn: "Sao em có thể nhìn ra điều đó?"<br /><br />

                        Giản Dao không che giấu niềm vui khi cô đoán trúng, ánh mắt cô dừng lại trên đầu ngón tay thon dài trắng trẻo của anh ta: "Em đoán bừa ấy mà. Em thấy anh rửa tay mấy lần, chứng tỏ anh là người ưa sạch sẽ. Trên người anh có múi thuốc khử trùng của bệnh viện, hơn nữa ngón tay của anh...trông giống tay bác sỹ."<br /><br />

                        "Cám ơn em! Tôi coi câu này của em như lời khen ngợi." Phó Tử Ngộ nói. Mười đầu ngón tay vốn đang chắp vào nhau nhanh chóng bay lượn, giống hai con bươm bướm khéo léo nhảy múa, Giản Dao nhìn hoa mắt.<br /><br />

                        Sau đó, cuộc trò chuyện của hai người càng trở nên sôi nổi hơn. Một lúc sau, họ quay trở lại đề tài Bạc Cận Ngôn, Phó Tử Ngộ thở dài: "Vài ngày nữa tôi sẽ rời khỏi nơi này, nhưng không yên tâm Cận Ngôn. Nói thật, tính cách cậu ấy hơi quái gở."<br /><br />

                        Nghe anh ta nhận xét về vị Bạc tiên sinh chưa biết mặt, Giản Dao chỉ lịch sự cười cười, không đáp lời cũng không truy vấn.<br /><br />

                        Phó Tử Ngộ nói tiếp: "Cậu ấy về đây lâu như vậy mà vẫn chẳng có một người bạn nào. Tôi dám đánh cuộc, bọn họ thậm chí không biết cậu ấy trở về từ bao giờ ấy chứ."<br /><br />


                        Giản Dao vẫn giữ nụ cười trên môi, cô không có ý định tiếp lời. Trong khi đó, Phó Tử Ngộ hưng phấn nhìn cô, tựa hồ chờ cô hỏi về Bạc Cận Ngôn. Thái độ nhiệt tình của anh ta khiến Giản Dao hơi ngạc nhiên. Nhưng cô không nghĩ ngợi sâu hơn, mở miệng thuận theo câu nói của anh ta: "Anh ấy về từ năm ngoái phải không?"<br /><br />
                        Phó Tử Ngộ: "Sao em biết?"<br /><br />
                        "Năm ngoái em về nhà vào kỳ nghỉ, có đi qua nơi này nhưng không thấy cây thường xuân. Hiện tại, cây thường xuân ở ngoài kia cao khoảng bốn năm mét. Nhà em trồng cây thường xuân một năm cũng cao cỡ đó."<br /><br />
                        Hai người bất giác trò chuyện hơn nữa tiếng đồng hồ, Phó Tử Ngộ cúi đầu xem đồng hồ đeo tay, mỉm cười: "Thời gian không còn sớm, hay là em về trước đi. Lát nữa tôi và Cận Ngôn thương lượng rồi gọi điện cho em. Rất cám ơn em hôm nay có thể đến đây. Nếu cậu ấy quyết định dùng em, cậu ấy sẽ ký hợp đồng làm việc với em. Em cần phải làm việc ở đây trong hai mươi ngày liên tục, em cần hoàn thành tài liệu dịch ngay tại chỗ. Em không được phép mang tài liệu ra khỏi nơi này, phải giữ bí mật nội dung. Ngoài ra, gần đây cậu ấy nghỉ ngơi tĩnh dưỡng, không thích bị người khác làm phiền. Vì vậy chưa được cậu ấy cho phép, em đừng bước lên tầng hai. Còn những chi tiết khác khi nào ký hợp đồng sẽ bàn cụ thể sau."<br /><br />
                        Giản Dao rời khỏi ngôi biệt thự, bên ngoài trời đã xế chiều. Ông mặt trời ló ra khỏi tầng mây, chiếu ánh sáng màu vàng xuống khắp núi rừng. Xung quanh đều là lá cây óng ánh và hoa tuyết trắng xóa.<br /><br />
                        Giản Dao tin tưởng vào khả năng dịch thuật của bản thân, cô cảm thấy chắc sẽ nhận được công việc này. Tuy chủ nhân chưa lộ diện, có vẻ rất thần bí và hơi kỳ quái nhưng dù sao đây cũng là công việc do thầy giáo giới thiệu nên tương đối đáng tin cậy.<br /><br />
                        Lúc đi xuống dốc núi cách ngôi biệt thự hơn mười mét, Giản Dao bỗng quay đầu, cô hơi ngẩng người khi bắt gặp một hình bóng bên cửa sổ ở tầng hai. Người đó mặc ple màu đen tuyền. Dáng người anh cao lớn thẳng tắp, vô cũng nổi bật. Chỉ có điều, anh quay lưng ra ngoài nên cô không nhìn rõ diện mạo của anh.<br /><br />
                        Giản Dao vừa ra về, Phó Tử Ngộ liền đi lên tầng hai. Khác với phong cách ấm áp trang nhã của tầng dưới, tầng này chỉ có một hành lang hẹp và dài, chạy thẳng vào căn phòng kín mít. Bốn bức tường đều sơn màu trắng, không có bất cứ vật trang trí nào, khiến căn phòng càng âm u và lạnh lẽo.<br /><br />
                        Cánh cửa gian phòng trong cùng khép hờ, Phó Tử Ngộ đẩy cửa, liền tựa người vào cánh cửa. Anh ta không còn giữ bộ dạng nho nhã như lúc gặp Giản Dao mà hét lớn: "Fuck!"<br /><br />
                        Tiếng hét của anh ta vang dội trong không khí yên tĩnh, khiến người đàn ông đang cúi đầu đọc sách bên cửa sổ nhíu mày liếc anh ta, sau đó...lại tiếp tục chăm chú đọc sách.<br /><br />
                        Phó Tử Ngộ cũng chẳng cần bận tâm. Anh ta cầm tập tài liệu Giản Dao vừa dịch ném vào lòng người đó: "Dịch rất chuẩn xác, văn phong mượt mà." Nói xong, anh ta lại rút từ túi áo một tờ giấy nhỏ màu trắng, bên trong có dòng chữ viết tay bằng mực đen:<br /><br />
                        "Question 1: Nghề nghiệp của Phó Tử Ngộ?<br /><br />
                        Question 2: Tôi dọn đến đây bao lâu rồi?<br /><br />
                        ..."<br /><br />
                        Đó là những vấn đề Phó Tử Ngộ kêu Giản Dao suy đoán khi hai người trò chuyện.<br /><br />
                        Phó Tử Ngộ đập bốp tờ giấy xuống bàn: "Cô ấy đã phân tích đúng hết những vấn đề của cậu. Chắc cậu hài lòng về bản dịch lần này rồi chứ?"<br /><br />
                        Khóe miệng người đàn ông bên cửa sổ ẩn hiện ý cười, nhưng anh ta không phủ nhận cũng không khẳng định. Phó Tử Ngộ sợ anh lại giở thói khắt khe, cất giọng như đinh đóng cột: "Nếu còn chưa hai lòng, cậu hãy tự mình dịch đi. Còn nữa, tôi không phải là trợ lý của cậu, vài ngày nữa tôi sẽ quay về thành phố B, cậu đừng trông mong tôi tiếp tục làm chân chạy vặt cho cậu."<br /><br />
                        Lúc này, người đàn ông mới buông sách và ngẩng đầu. Anh nhìn Phó Tử Ngộ bằng ánh mắt kỳ lạ, từ tốn đáp: "Thời gian của tôi không phải để làm những việc vô vị này."<br /><br />
                        Phó Tử Ngộ á khẩu, anh ta hết cách nên chỉ có thể làu bàu: "Cậu là chuyên gia nghiên cứu các vụ giết người, cô bé đó chỉ là phiên dịch nhỏ. Việc gì cậu phải khảo sát năng lực quan sát và năng lực tư duy của người ta? Hại tôi vòng vo tam quốc, có lẽ người ta nghĩ tôi là kẻ lắm điều cũng nên."<br /><br />
                        Người đàn ông để lộ nụ cười đặc biệt ôn hòa: "Điều này cũng dễ hiểu. Tôi không thể để kẻ ngu xuẩn dịch tài liệu của tôi. Một người tư duy không nhạy bén và không tinh tế chỉ có thể dịch ra ý của chữ nghĩa, chứ không thể lý giải sự tinh tế của từng chi tiết nhỏ và linh hồn tồn tại đằng sau ngôn từ."<br /><br />
                        Phó Tử Ngộ hết nói nổi, nhưng anh ta cũng đã quen tính cách của bạn. Anh ta vừa tức vừa buồn cười: "Cô bé Giản Dao đó có thể hiểu linh hồn của cậu hay không?"<br /><br />
                        Người đàn ông ngẩn ra một lúc, lại cúi đầu tiếp tục đọc sách: "Không ai có thể hiểu."<br /><br />
                        <center>
                            <p>xem full truyện tại</p>
                            <a href='https://truyenfull.vn/hay-nham-mat-khi-anh-den/chuong-2/'>https://truyenfull.vn/hay-nham-mat-khi-anh-den/chuong-2/</a>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HayNhamMatKhiAnhDen));
