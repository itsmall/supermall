<template>
  <div>
    <div class="content">
      <ul>
        <button @click="btnClick">按钮</button>

        <li>2列表2</li>
        <li>3列表3</li>
        <li>4列表4</li>
        <li>5列表5</li>
        <li>6列表6</li>
        <li>7列表7</li>
        <li>8列表8</li>
        <li>9列表9</li>
        <li>10列表10</li>
        <li>11列表11</li>
        <li>12列表12</li>
        <li>13列表13</li>
        <li>14列表14</li>
        <li>15列表15</li>
        <li>16列表16</li>
        <li>17列表17</li>
        <li>18列表18</li>
        <li>19列表19</li>
        <li>20列表20</li>
        <li>21列表21</li>
        <li>22列表22</li>
        <li>23列表23</li>
        <li>24列表24</li>
        <li>25列表25</li>
        <li>26列表26</li>
        <li>27列表27</li>
        <li>28列表28</li>
        <li>29列表29</li>
        <li>30列表30</li>
        <li>31列表31</li>
        <li>32列表32</li>
        <li>33列表33</li>
        <li>34列表34</li>
        <li>35列表35</li>
        <li>36列表36</li>
        <li>37列表37</li>
        <li>38列表38</li>
        <li>39列表39</li>
        <li>40列表40</li>
        <li>41列表41</li>
        <li>42列表42</li>
        <li>43列表43</li>
        <li>44列表44</li>
        <li>45列表45</li>
        <li>46列表46</li>
        <li>47列表47</li>
        <li>48列表48</li>
        <li>49列表49</li>
        <li>50列表50</li>
        <li>51列表51</li>
        <li>52列表52</li>
        <li>53列表53</li>
        <li>54列表54</li>
        <li>55列表55</li>
        <li>56列表56</li>
        <li>57列表57</li>
        <li>58列表58</li>
        <li>59列表59</li>
        <li>60列表60</li>
        <li>61列表61</li>
        <li>62列表62</li>
        <li>63列表63</li>
        <li>64列表64</li>
        <li>65列表65</li>
        <li>66列表66</li>
        <li>67列表67</li>
        <li>68列表68</li>
        <li>69列表69</li>
        <li>70列表70</li>
        <li>71列表71</li>
        <li>72列表72</li>
        <li>73列表73</li>
        <li>74列表74</li>
        <li>75列表75</li>
        <li>76列表76</li>
        <li>77列表77</li>
        <li>78列表78</li>
        <li>79列表79</li>
        <li>80列表80</li>
        <li>81列表81</li>
        <li>82列表82</li>
        <li>83列表83</li>
        <li>84列表84</li>
        <li>85列表85</li>
        <li>86列表86</li>
        <li>87列表87</li>
        <li>88列表88</li>
        <li>89列表89</li>
        <li>90列表90</li>
        <li>91列表91</li>
        <li>92列表92</li>
        <li>93列表93</li>
        <li>94列表94</li>
        <li>95列表95</li>
        <li>96列表96</li>
        <li>97列表97</li>
        <li>98列表98</li>
        <li>99列表99</li>
        <li>100列表100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  // data() {
  //   return {
  //     scroll: null
  //   };
  // },
  mounted() {
    const scroll = new BScroll(document.querySelector(".content"), {
      //probe 侦察 默认0 （0和1：不侦察实时位置  2：在手指滚动的过程中侦察，手指离开后不侦察  3：只要是滚动都侦察）
      probeType: 3,
      click: true,
      pullUpLoad: true
    });

    scroll.on("scroll", position => {
      //console.log("position:", position);
    });

    scroll.on("pullingUp", () => {
      console.log("上拉加载");
      //发送网络请求，请求更多数据
      //等数据请求完成，并且将新的数据展示出来后
      setTimeout(() => {
        scroll.finishPullUp();
      }, 2000);
    });
  },
  methods: {
    btnClick() {
      console.log(1);
    }
  }
};
</script>

<style scoped>
.content {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
