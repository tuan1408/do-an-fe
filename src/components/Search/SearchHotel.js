import moment from 'moment'
import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import useQuery from '../../f/get_query_parameter'
import FilterRangeCostHotel from '../Filter/FilterRangeCostHotel'

const SearchHotel = () => {
  const query= useQuery()
  const location= useLocation()
  const entities= useMemo(()=> ["Wifi", "Hồ bơi", "Chỗ đậu xe", "Nhà hàng", "Lễ tân 24h", "Thang máy", "Trung tâm thể dục", "Phòng họp", "Đưa đón sân bay"], [])
  const entities2= useMemo(()=> ["Tất cả", "Chọn nhiều nhất", "Thanh toán khi nhận phòng", "Biệt thự", "Căn hộ", "Nhà nghỉ", "Ưu đãi đặc biệt", "Khu nghỉ dưỡng"], [])
  
  return (
    <div className='aoe-1'>
        <div className="aso-1">
            <div className="dkw-1">
            <div className="oew-2">
                Kết quả tìm kiếm của bạn tại:&nbsp;
                {query.get("l").replace("-", " ")}&nbsp;
                {location.state.location_travel && ", "+location.state.location_travel}
            </div>
            <div className="ewo-4">
                {moment(query.get("spec").split(".")[0].toString(), "DD-MM-YYYY").format("DD MMM YYYY") +  " - "+ moment(query.get("spec").split(".")[1].toString(), "DD-MM-YYYY").format("DD MMM YYYY")}
            </div>
            </div>
            <div className="iew-1">
            <div className="dsd-1" role={"button"}>
                <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/light/ic_system_search_24px-dee9abb8908124af6564d818120f1c08.svg" height="16" width="16" alt="open" />
                <div className="adw-2">
                Đổi tìm kiếm
                </div>
            </div>
            </div>
      </div>
      <div className="dsjiewwew" style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
        <div className="dsijeesawdad">
            <div className="sjskeekweow">
                <div className='fssdafgrgeira'>
                    <div className='sdfsdafdafwdsrgh'>
                        Sắp xếp kết quả 
                    </div>
                    <div className='jdefkgjdsfdsgjdsk'>
                        Sắp xếp kết quả theo lựa chọn
                    </div>
                    <div className='fgwerwtrwette'>
                        <div className='wrtrwrtrw'><input type="radio" name="f" /><div>Giá cao nhất</div></div>
                        <div className='wrtrwrtrw'><input type="radio" name="f" /><div>Giá thấp nhất</div></div>
                        <div className='wrtrwrtrw'><input type="radio" name="f" /><div>Điểm đánh giá</div></div>
                        <div className='wrtrwrtrw'><input type="radio" name="f" /><div>Độ phổ biến</div></div>
                    </div>
                </div>
                <div className='kfwekgopef'>
                    <div className='sdfsdafdafwrgh'>
                        Lọc kết quả 
                    </div>
                    <div className='jdefkgjdsfgjdsk'>
                        Đặt lại bộ lọc
                    </div>
                </div>
                <div className='bjdfbdsfbfdf'>
                    Hiển thị kết quả phân loại theo: 
                </div>
                <div className='dfsfgwrterww'>
                    <div className='gdfjerdgrwttew'>Khoảng giá/đêm</div>
                    <div className='grhfrwthrwtertw'>
                        <div className='dgertryoyup'>
                            0 VND
                        </div>
                        <div className='grthorpetrypr'>
                            23455560 VND
                        </div>
                    </div>
                    <FilterRangeCostHotel />
                </div>
                <div className='fkkfdgrwketoepre'>
                    <div className='jroiwejrfsdfs'>Hạng sao</div>
                    <div className='fdfdfgklesfgkdfmal'>
                        <input type="checkbox" name="e" />
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                    </div>
                    <div className='fdfdfgklesfgkdfmal'>
                        <input type="checkbox" name="e" />
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>

                    </div>
                    <div className='fdfdfgklesfgkdfmal'>
                        <input type="checkbox" name="e" />
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                    </div>
                    <div className='fdfdfgklesfgkdfmal'>
                        <input type="checkbox" name="e" />
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                    </div>
                    <div className='fdfdfgklesfgkdfmal'>
                        <input type="checkbox" name="e" />
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                    </div>
                </div>
                <div className='fkkfdgrwketoepre'>
                    <div style={{marginBottom: 8}}>Tiện nghi</div>    
                    <div className='gkorkawrklsgr'>
                        {
                            entities?.map((item, key)=> <div key={key} className='djfiejwaejwew'>
                            <input type="checkbox" name='r' />
                            <div className='opdrkoprkwopewe'>{item}</div>
                        </div>)
                        }
                        
                    </div>
                </div>
                <div className='fkkfdgrwketoepre'>
                    <div style={{marginBottom: 8}}>Loại phòng nghỉ</div>    
                    <div className='gkorkawrklsgr'>
                        {
                            entities2?.map((item, key)=> <div key={key} className='djfiejwaejwew'>
                            <input type="radio" name='v' />
                            <div className='opdrkoprkwopewe'>{item}</div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="rijererwrwe">
                <div className='sfjepeqkpoqwow'>
                    <div className='fddkfshdfijsdd'>
                        <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019241-1798x1419-FIT_AND_TRIM-8b863abd52df5a14e92409e000613d7d.jpeg?tr=q-40,w-300,h-300&_src=imagekit" alt="open" />  
                    </div>
                    <div className='fjkdrwaejeioaw'>
                        <div className='ijwekpoawkaopaw'>
                            Vinpearl Resort & Spa Da Nang
                        </div>
                        <div className='jeoiejrirjioewjioejsiowep'>
                            <div className='diosrjeirawpipwoawwa'>
                                Khách sạn
                            </div>
                            <div className='jiarjawieairotioewaeksoas'>
                                <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g></svg>
                            </div>
                        </div>
                        <div className='fpoiopedfopsfdkgopdsdfdsef'>
                            <svg fill="#8f8f8f" stroke="none" viewBox="0.093443203 0 11.2125 12" height="16" strokeLinecap="round" width="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(1.308119, 0.5)"><path d="M1.51262719,7.70621739 L4.35698656,10.8804348 L7.19464281,7.7133913 L7.19339008,7.71338972 L7.19473219,7.7133913 C7.92626656,6.93382609 8.37895094,5.85486957 8.37895094,4.66304348 C8.37895094,2.2856087 6.57804469,0.358695652 4.35707594,0.358695652 C2.13566031,0.358695652 0.335200937,2.2856087 0.335200937,4.66304348 C0.335200937,5.85127862 0.785019976,6.92716844 1.51271674,7.7062175 Z"></path><ellipse fill="#fff" cx="4.35885934" cy="4.665061" rx="1.78932809" ry="1.91499996"></ellipse></g></svg>
                            <span className='kfpkropepeeas'>Mỹ An, Đà Nẵng</span>
                        </div>
                    </div>

                    <div className='djfjlejwioejqi'>
                        <div className='pofkwopeas'>
                            <img className="_1Mamo" src="https://ik.imagekit.io/tvlk/image/imageResource/2018/04/03/1522754232742-552d078378e134fb3df3b659a7d527f4.png?tr=q-75" alt="open" />
                        </div>
                        <div className='fkfapwokwopewaw'>
                            <div className='fjsijpskopwopwoa'>
                                572.224 VND
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHotel